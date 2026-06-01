import {
  addComponent,
  addImports,
  addTemplate,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import * as fs from 'node:fs';
import { promises as fsp } from 'node:fs';
import * as path from 'node:path';
import { generateIconsIndex, generateIconsRegistry } from './files-generation/generate-icon-index';
import { createSvgComponentCode } from './render/svg-codegen';
import { vueSFCWrapper } from './render/vue-sfc-wrapper';
import type { ComposeIconSize } from './runtime/types/icon-sizes';
import { assertAbsolute } from './runtime/types/path';
import { iconSizeDefault } from './runtime/utils/icon-theming';
import {
  createComponentFromName,
  generateComponentName,
  generateCssFile,
  optimizeSvg,
  readDirectoryRecursively,
  writeComponentFile,
} from './utils';
import { createDir, writeFile } from './utils/filesystem/helpers';
import { optimizeCss } from './utils/styles/optimize-css';
import { SvgProcessingCache } from './utils/svg-processing-cache';

export interface IconComponentOptions {
  /**
   * Prefix prepended to the generated component name.
   * e.g. `'My'` → `<MyArrowUpIcon />`
   *
   * @type {?string}
   * @default undefined
   */
  prefix?: string;

  /**
   * Suffix appended to the generated component name.
   * e.g. `'Icon'` → `<ArrowUpIcon />`
   *
   * @type {?string}
   * @default 'Icon'
   */
  suffix?: string;

  /**
   * Naming convention for the generated component.
   *
   * @type {'pascal' | 'kebab'}
   * @default 'pascal'
   */
  case?: 'pascal' | 'kebab';

  /**
   * Directory where generated components are written.
   * Defaults to `.nuxt/compose-icons`.
   *
   * @type {?string}
   */
  destDir?: string;

  /**
   * Format of the generated component file, either as a Vue SFC (.vue) or as a TypeScript file (.ts)
   *
   *
   * @type {?'ts' | 'vue'}
   * @default 'ts'
   */
  fileFormat?: 'vue' | 'ts';

  /**
   * Write an `index.ts` barrel file in `destDir`.
   *
   * @type {?boolean}
   * @default false
   */
  hasIndexFile?: boolean;

  /**
   * Extra CSS classes applied to every generated icon component.
   *
   * @type {?string | string[]}
   * @default []
   */
  iconClasses?: string | string[];
}

export interface NuxtComposeIconsOptions {
  // -------------------------------------------------------------------------
  // Core
  // -------------------------------------------------------------------------

  /**
   * The path to the .svg icons directory
   *
   * @type {?string}
   */
  pathToIcons?: string;

  /**
   * Component generation options: naming, output directory, file format.
   *
   * @type {?IconComponentOptions}
   */
  component?: IconComponentOptions;

  /**
   * Icon sizes used to generate `--size-*` CSS variables and size classes.
   *
   * defaults :{
   *  xs: '0.5rem',
   *  sm: '0.875rem',
   *  md: '1rem',
   *  lg: '1.5rem',
   *  xl: '2.5rem'
   * }
   * @type {?ComposeIconSize}
   */
  iconSizes?: ComposeIconSize;

  // -------------------------------------------------------------------------
  // Features
  // -------------------------------------------------------------------------

  /**
   * Register the built-in `<ComposeIconOverview />` component.
   * Useful during development to browse all available icons.
   *
   * @type {?boolean}
   * @default false
   */
  includeOverview?: boolean;

  /**
   * Auto-import `useComposeIcon` and `useComposeIconRegistry` composables.
   * Disable if you only use the generated components and don't need dynamic lookup.
   *
   * @type {?boolean}
   * @default true
   */
  includeComposables?: boolean;

  // -------------------------------------------------------------------------
  // Advanced
  // -------------------------------------------------------------------------

  /**
   * Log component names without writing files. Useful to preview what will be generated.
   *
   * @type {?boolean}
   * @default false
   */
  dryRun?: boolean;

  /**
   * Whether to re-run icon generation on every build. (bypassing the built-in cache)
   *
   * @type {?boolean}
   * @default false
   */
  reRunOnBuild?: boolean;

  /**
   * Show additional debug logs during setup.
   *
   * @type {?boolean}
   * @default false
   */
  debug?: boolean;

  /**
   * Directory used to persist the SVG processing cache across builds.
   * Defaults to `{rootDir}/.cache/nuxt-compose-icons`. Safe to gitignore.
   *
   * @type {?string}
   */
  cacheDir?: string;

  /**
   * Register existing Vue components as icons directly.
   * Planned feature — not yet implemented.
   *
   * @type {?{ [key: string]: Component }}
   */
  iconComponentList?: { [key: string]: Component };
}

/**
 * Normalizes iconClasses to a string array and appends the required base class.
 */
function normalizeIconClasses(options: NuxtComposeIconsOptions): string[] {
  const iconClasses = options.component?.iconClasses;
  const classes = iconClasses
    ? Array.isArray(iconClasses)
      ? [...iconClasses]
      : [iconClasses]
    : [];
  // Ensure the base class is always included to allow styling icons with a common selector
  classes.push('compose-icon');
  return classes;
}

export default defineNuxtModule<NuxtComposeIconsOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  // By default the "Icon" suffix is used with no prefix, e.g. "arrow-up.svg" → <ArrowUpIcon />
  defaults: {
    component: {
      suffix: 'Icon',
      case: 'pascal',
      fileFormat: 'ts',
      hasIndexFile: false,
    },
    reRunOnBuild: false,
    iconComponentList: {},
    includeOverview: false,
    includeComposables: true,
  },

  hooks: {
    'kit:compatibility'(compatibility, issues) {
      const logger = useLogger('nuxt-compatibility');
      if (issues.length > 0) {
        logger.warn('⚠️ - Nuxt compatibility issues detected:');
        issues.forEach((issue) => {
          logger.warn(`⚠️ - ${issue.name}: ${issue.message}`);
        });
        const majorVersion = Number.parseInt(compatibility?.nuxt?.split('.')[0] || '0', 10);
        if (majorVersion >= 4) {
          logger.info('✅ - Nuxt 4 detected');
        } else if (majorVersion === 3) {
          logger.info('✅ - Nuxt 3 detected');
        } else {
          logger.warn(`⚠️ - Nuxt ${majorVersion} detected, compatibility not guaranteed`);
        }
      }
    },
  },

  async setup(options, nuxt) {
    const logger = useLogger('nuxt-compose-icons');
    const { resolve } = createResolver(import.meta.url);

    /**
     * Resolver for everything related to the user's app directory
     *
     * @param {...string[]} p
     * @returns {string}
     */
    function resolveApp(...p: string[]) {
      return path.resolve(nuxt.options.rootDir, ...p);
    }

    /**
     * Resolver for everything related to the Nuxt build directory
     *
     * @param {...string[]} p
     * @returns {string}
     */
    function resolveBuild(...p: string[]) {
      return path.resolve(nuxt.options.buildDir, ...p);
    }

    // Prevent Vite's dep pre-bundling from running esbuild on the composables
    // before this module has a chance to register the #compose-icons/registry alias.
    // nuxt.options.vite is always mutable; vite:extendConfig types optimizeDeps as readonly.
    nuxt.options.vite.optimizeDeps ??= {};
    (nuxt.options.vite.optimizeDeps.exclude ??= []).push('nuxt-compose-icons');

    const { pathToIcons, iconComponentList, iconSizes } = options;
    const {
      suffix,
      prefix,
      case: _case,
      destDir,
      fileFormat,
      hasIndexFile,
    } = options.component ?? {};

    if (!pathToIcons && !Object.keys(iconComponentList ?? {}).length) {
      logger.warn('nuxt-compose-icons: pathToIcons is required — skipping icon generation.');
      return;
    }

    // Set a directory where the icons will be generated if no component.destDir is provided (.nuxt/compose-icons)
    const defaultDir = resolveBuild('compose-icons');
    const userDir = destDir;
    const componentsDir = assertAbsolute(
      userDir ? (path.isAbsolute(userDir) ? userDir : resolveApp(userDir)) : defaultDir,
    );

    if (!userDir) {
      logger.info(
        '⚠️ - No directory is set, using default directory → ',
        defaultDir,
        '\n To set a custom directory, use the component.destDir option.',
      );
    }

    await createDir(componentsDir);

    // Guard: iconComponentList path is a planned feature — only pathToIcons is supported for now
    if (!pathToIcons) return;

    // Resolve the path to the icons directory provided
    //  it can be provided with many different formats:
    //  - absolute path: /Users/arthur/icons
    //  - relative path from project root: ./icons or icons
    // We resolve it to an absolute path
    const absolutePathToIcons = assertAbsolute(
      path.isAbsolute(pathToIcons) ? pathToIcons : resolveApp(pathToIcons),
    );

    if (!fs.existsSync(absolutePathToIcons) || !fs.statSync(absolutePathToIcons).isDirectory()) {
      logger.error(`Folder does not exist: ${absolutePathToIcons}`);
      throw new Error(`Folder does not exist: ${absolutePathToIcons}`);
    }

    const files = await readDirectoryRecursively(absolutePathToIcons);

    if (options.dryRun) {
      logger.info(`🔍 Dry-run mode: No files will be written.`);
      files.forEach((file) => {
        const fileInfo = path.parse(file);
        logger.info(
          `${fileInfo.base} Would generate: ${generateComponentName(fileInfo.name, options.component ?? {})}`,
        );
      });
      return;
    }

    const iconComponentClasses = normalizeIconClasses(options);

    const optionsHash = SvgProcessingCache.hash({
      iconClasses: iconComponentClasses,
      fileFormat,
      prefix,
      suffix,
      case: _case,
    });
    const resolvedCacheDir = options.cacheDir
      ? resolveApp(options.cacheDir)
      : resolveApp('node_modules/.cache/nuxt-compose-icons');
    const cache = new SvgProcessingCache(resolvedCacheDir, optionsHash, nuxt.options.rootDir);
    if (!options.reRunOnBuild) {
      await cache.load();
    }

    /*
     * For each SVG file we:
     * 1. Generate the component name based on the initial svg file name and the options provided (prefix, suffix, case)
     * 2. Parse the content (as HTML/XML string)
     * 3. Optimize with SVGO (skipped for unchanged files via hash cache)
     * 4. Create the component code as a literal string template by:
     *   . Recreating the Vue VNode structure dynamically based on the SVG content
     *   . Setting props and attributes based on the SVG content and the options passed
     * 5. Write the component to the file system
     *    (addTemplate for .nuxt/ so files survive the prepare-phase cleanup, writeFile for custom dirs)
     * 6. Create the component object with name and resolved path
     *
     * Then globally:
     * 7. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array
     * 8. Generate the icons index file (if component.hasIndexFile is true)
     * 9. Register each component with Nuxt's auto-import system
     * 10. Generate the icon registry file and expose it via the #compose-icons/registry alias
     * 11. Add composables (useComposeIcon, useComposeIconRegistry)
     *
     * We use a literal string template to create the Vue component.
     * See https://nuxt-compose-icons.arthurplazanet.com/why-literal-strings-to-create-vue-components
     *
     * Files are processed in parallel (Promise.all) to overlap I/O.
     * SVGO (step 2) is skipped for any SVG whose content hash matches the persistent cache.
     */
    const svgFiles = files.filter((f) => path.parse(f).ext === '.svg');

    const generatedComponents: Component[] = await Promise.all(
      svgFiles.map(async (filePath) => {
        const fileInfo = path.parse(filePath);

        // 1. Component name derived from filename + naming options (computed once)
        const componentName = generateComponentName(fileInfo.name, options.component ?? {});

        // 2. Parse the content (as HTML string)
        const rawSvg = await fsp.readFile(filePath, 'utf-8');
        const contentHash = SvgProcessingCache.hash(rawSvg);

        // 3. Optimize with SVGO — use cached result if SVG is unchanged
        let componentCode = cache.get(filePath, contentHash);
        if (componentCode === null) {
          const optimized = optimizeSvg(rawSvg, { iconClasses: iconComponentClasses });

          // 4. Create the component code as a literal string template (inside cache miss)
          componentCode = createSvgComponentCode(componentName, optimized);

          // If fileFormat is "vue", wrap the component code in a Vue SFC <script lang="ts"> block
          if (fileFormat === 'vue') {
            componentCode = vueSFCWrapper(componentCode);
          }

          cache.set(filePath, contentHash, componentCode);
        }

        // 5. Write the component to the file system.
        // Default dir (.nuxt): use addTemplate so files survive the prepare-phase cleanup.
        // Custom dir: writeFile is fine — Nuxt never cleans user directories.
        let generatedFilePath: string;
        if (componentsDir !== defaultDir) {
          generatedFilePath = await writeComponentFile({
            componentName,
            componentsDir,
            componentCode,
            format: fileFormat,
          });
        } else {
          const ext = fileFormat ?? 'ts';
          const capturedCode = componentCode;
          const iconTemplate = addTemplate({
            filename: `compose-icons/${componentName}.${ext}`,
            getContents: () => capturedCode,
            write: true,
          });
          generatedFilePath = iconTemplate.dst;
        }

        if (options.debug) {
          logger.success(`✅ Generated component: ${componentName} from ${fileInfo.base}`);
        }

        // 6. Create the component object with name and resolved path
        return createComponentFromName({
          name: componentName,
          shortPath: generatedFilePath,
          filePath: generatedFilePath,
        });
      }),
    );

    if (!options.reRunOnBuild) {
      await cache.save();
    }

    // 7. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array
    const baseIconStylesPath = resolve('runtime/assets/compose-icon.css');
    nuxt.options.css.push(baseIconStylesPath);

    const cssFileContent = generateCssFile({ iconSizes, iconClasses: iconComponentClasses });
    const completeIconStyles = optimizeCss(cssFileContent);
    const cssFileName = 'compose-icon-sizes.css';
    const tpl = addTemplate({
      filename: cssFileName,
      getContents: () => completeIconStyles,
    });
    nuxt.options.css.push(tpl.dst);

    // Custom destDir only: concatenate base + generated CSS into one file so it travels with components
    if (componentsDir !== defaultDir) {
      const baseIconStylesContent = await fsp.readFile(baseIconStylesPath, 'utf-8');
      const combinedCssFileName = 'compose-icons.css';
      const combinedStyles = optimizeCss(`${baseIconStylesContent}\n${cssFileContent}`);
      await writeFile(
        assertAbsolute(path.join(componentsDir, combinedCssFileName)),
        combinedStyles,
      );
    }

    if (options.debug) {
      logger.info(`📦 - Registering components from ${componentsDir}`);
    }

    // 8. Generate the icons index file (opt-in via component.hasIndexFile)
    if (hasIndexFile) {
      await writeFile(
        assertAbsolute(resolve(componentsDir, 'index.ts')),
        generateIconsIndex(generatedComponents),
      );
    }

    // 9. Register each generated component with Nuxt's auto-import system
    for (const c of generatedComponents) {
      addComponent({ name: c.pascalName, filePath: c.filePath });
    }

    logger.info(
      `📦 ${generatedComponents.length} components generated and registered from ${componentsDir}`,
    );

    // 10. Generate the icon registry file and expose it via the #compose-icons/registry alias
    let registryPath: string;

    if (componentsDir !== defaultDir) {
      // Custom component.destDir: write registry there (alias points directly to it).
      // No need for a .nuxt copy — paths are already correct relative to componentsDir.
      const iconsRegistryContent = await generateIconsRegistry(generatedComponents, componentsDir);
      registryPath = path.join(componentsDir, 'icon-registry.ts');
      await writeFile(assertAbsolute(registryPath), iconsRegistryContent);
    } else {
      // Default (.nuxt/compose-icons): use addTemplate so Nuxt manages the file lifecycle.
      const templateRegistryContent = await generateIconsRegistry(generatedComponents, defaultDir);
      const registryTemplate = addTemplate({
        filename: 'compose-icons/icon-registry.ts',
        getContents: () => templateRegistryContent,
        write: true,
      });
      registryPath = registryTemplate.dst;
    }

    // Make #compose-icons/registry resolvable in Vite's transform phase (client + SSR).
    // Nitro gets the same alias — icon component files are written via addTemplate so they
    // survive the prepare-phase cleanup and are present when Nitro bundles the server.
    nuxt.options.alias['#compose-icons/registry'] = registryPath;

    if (options.includeOverview) {
      addComponent({
        name: 'ComposeIconOverview',
        filePath: resolve('runtime/components/ComposeIconOverview.vue'),
      });
    }
    // 11. Add composables
    if (options.includeComposables) {
      // If the user provides iconSizes, use them as-is (they are the full set).
      // Only fall back to iconSizeDefault when no sizes are configured at all.
      const finalSizes = (
        iconSizes && Object.keys(iconSizes).length > 0 ? iconSizes : iconSizeDefault
      ) as Record<string, string>;
      nuxt.options.runtimeConfig.public.composeIcons = { sizes: finalSizes };

      addImports([
        { name: 'useComposeIcon', from: resolve('runtime/composables/use-compose-icon') },
        {
          name: 'useComposeIconRegistry',
          from: resolve('runtime/composables/use-compose-icons-registry'),
        },
        {
          name: 'useComposeIconTheme',
          from: resolve('runtime/composables/use-compose-icon-theme'),
        },
      ]);
    }
  },
});
