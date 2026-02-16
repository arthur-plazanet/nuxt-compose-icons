import {
  addComponent,
  addImportsDir,
  addTemplate,
  checkNuxtCompatibility,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import * as fs from 'node:fs';
import { promises as fsp } from 'node:fs';
import * as path from 'node:path';
import { createSvgComponentCode } from './render/svg-codegen';
import { IconSize } from './runtime/types';
import { ComposeIconSize } from './runtime/types/icon-sizes';
import {
  createComponentFromName,
  generateComponentName,
  generateCssFile,
  optimizeSvg,
  readDirectoryRecursively,
  writeComponentFile,
} from './utils';
import { generateIconsIndex, generateIconsRegistry } from './utils/filesystem/generate-icon-index';
import { createDir, writeFile } from './utils/filesystem/helpers';
import { optimizeCss } from './utils/styles/optimize-css';
// export * from './runtime/composables/index';
// export { generateColorVariable, getIconSizeClass } from './runtime/utils';

// export { IconSize } from './runtime/types';
// export type {
//   ComposeIconProps,
//   ComposeIconSize,
//   IconSizeKey,
//   IconSizeKeyValue,
// } from './runtime/types';
export interface GeneratedComponentOptions {
  /**
   * The prefix to use for the component
   *
   * @type {?string}
   * @default undefined
   */
  prefix?: string;

  /**
   * The suffix to use for the component
   *
   * @type {?string}
   * @default "Icon" ( PascalCase ) and "-icon" ( kebab-case )
   */
  suffix?: string;

  /**
   * Case to use for the component name
   *
   * @type {'pascal' | 'kebab'}
   * @default "pascal" ( PascalCase ) and "kebab" ( kebab-case )
   */
  case: 'pascal' | 'kebab';

  /**
   * Wether to create an index file or not in the components directory
   *
   * @type {boolean}
   * @default false
   */
  hasIndexFile?: boolean;

  /**
   * TODO: The directory to save the generated components
   *
   * @type {?string}
   * @default "runtime/components/icons-generated"
   */
  componentsDestDir?: string;
}

export interface NuxtComposeIconsOptions {
  /**
   * Wether or not to run the module at every appplication build
   * default: true
   *
   * @type {?boolean}
   */
  reRunOnBuild?: boolean;

  /*
   * The path to the icons directory
   */
  pathToIcons?: string;

  /**
   * TODO: An object containing icon components to register
   * e.g. { 'custom-icon': CustomIconComponent }
   * This allows to register custom icon components directly without generating them from SVG files
   * Useful for registering third-party icon libraries or custom components
   * Note: The keys will be used as the component names (with prefix/suffix and case applied)
   * e.g. { 'custom-icon': CustomIconComponent } will be registered as "CustomIcon" or "custom-icon-icon" depending on the case option
   * default: {}
   *
   * @type {?{ [key: string]: Component }}
   */
  iconComponentList?: { [key: string]: Component };

  /**
   * The icon sizes to generate CSS classes for
   * default:
   * {
   *   xs: '0.5rem',
   *   sm: '0.875rem',
   *   md: '1rem',
   *   lg: '1.5rem',
   *   xl: '2.5rem',
   * }
   *
   * @type {?IconSizes}
   */
  iconSizes?: ComposeIconSize;

  /**
   * @type {GeneratedComponentOptions}
   */
  generatedComponentOptions: GeneratedComponentOptions;

  /**
   * Dry run mode: log the component names and paths without writing files
   *
   * @type {?boolean}
   * @default false
   */
  dryRun?: boolean;
}

export default defineNuxtModule<NuxtComposeIconsOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
    compatibility: {
      // Required nuxt version in semver format.
      nuxt: '>=3.0.0', // or use '^3.0.0'
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    reRunOnBuild: true,
    iconSizes: {
      [IconSize.XS]: '0.5rem',
      [IconSize.SM]: '0.875rem',
      [IconSize.MD]: '1rem',
      [IconSize.LG]: '1.5rem',
      [IconSize.XL]: '2.5rem',
    },
    // If not provided, the default will be to use the "Icon" suffix for the component without a prefix
    // e.g. "arrow-up.svg" will be "ArrowUpIcon"
    generatedComponentOptions: {
      prefix: undefined,
      suffix: 'Icon',
      case: 'pascal',

      // TODO: The directory to save the generated components
      // default "runtime/components/icons-generated"
      componentsDestDir: undefined,
    },
    iconComponentList: {},
  },

  hooks: {
    'build:before'() {
      // console.log('🚀 - build:before hook called');
    },
  },
  async setup(options, nuxt) {
    const logger = useLogger('nuxt-compose-icons');
    const { resolve } = createResolver(import.meta.url);
    // const resolver = createResolver(import.meta.url); // module package base
    // const resolveModule = resolver.resolve;

    /**
     * Resolver for everything related to the user's app directory
     *
     * @param {...string[]} p
     * @returns {*}
     */
    function resolveApp(...p: string[]) {
      return path.resolve(nuxt.options.rootDir, ...p);
    } // app base

    /**
     * Resolver for everything related to the Nuxt build directory
     *
     * @param {...string[]} p
     * @returns {*}
     */
    function resolveBuild(...p: string[]) {
      return path.resolve(nuxt.options.buildDir, ...p);
    } // build base

    const issues = await checkNuxtCompatibility({ nuxt: '^2.16.0' }, nuxt);
    if (issues.length) {
      logger.warn('Nuxt compatibility issues found:\n' + issues.toString());
    } else {
      // do something
    }
    const nuxt3 = await checkNuxtCompatibility({ nuxt: '^3.0.0' }, nuxt);
    if (nuxt3.length) {
      logger.warn('Nuxt 3 compatibility issues found:\n' + nuxt3.toString());
    }
    const nuxt4 = await checkNuxtCompatibility({ nuxt: '^4.0.0' }, nuxt);
    if (nuxt4.length) {
      logger.warn('Nuxt 4 compatibility issues found:\n' + nuxt4.toString());
    }

    logger.debug('🖼️ - nuxt-compose-icons nuxt versions compatibilities');
    logger.info('Nuxt 2 compatibility issues');
    logger.debug(issues);
    logger.info('Nuxt 3 compatibility issues');
    logger.debug(nuxt3);
    logger.info('Nuxt 4 compatibility issues');
    logger.debug(nuxt4);

    const { reRunOnBuild, pathToIcons, iconComponentList, iconSizes } = options;
    // const userComponentsDestDirOption = options.generatedComponentOptions
    //   .componentsDestDir as string;

    if (!reRunOnBuild) {
      logger.info('⚠️ - reRunOnBuild is disabled, the module will run only once at setup');
      return;
    }
    // .nuxt/compose-icons
    const defaultDir = resolveBuild('compose-icons');
    logger.info('📟 - defaultDir → ', defaultDir);

    if (!pathToIcons && !iconComponentList) {
      logger.error(
        'You must provide either pathToIcons or iconComponentList in the module options.',
      );
      throw new Error('pathToIcons or iconComponentList is required');
    }

    if (!options.generatedComponentOptions.componentsDestDir) {
      logger.info('⚠️ - componentsDestDir is not set, using default directory → ', defaultDir);
    }

    // let componentsDir: string = userComponentsDestDirOption;

    // /**
    //  * TODO: description
    //  */
    // if (userComponentsDestDirOption) {
    //   if (path.isAbsolute(userComponentsDestDirOption)) {
    //     logger.info(
    //       '📟 - Using absolute path for componentsDestDir → ',
    //       userComponentsDestDirOption,
    //     );
    //     await createDir(userComponentsDestDirOption);
    //     const componentsDir = options.generatedComponentOptions.componentsDestDir; // ✅ (already absolute)
    //     await createDir(componentsDir);

    //   } else {
    //          const componentsDir = resolveApp(options.generatedComponentOptions.componentsDestDir); // ✅
    //   await createDir(componentsDir);
    //     await createDir(
    //       path.resolve(
    //         fileURLToPath(
    //           new URL(nuxt.options.rootDir + userComponentsDestDirOption, import.meta.url),
    //         ),
    //       ),
    //     );
    //     logger.info(
    //       '📟 - Using relative path for componentsDestDir → ',
    //       userComponentsDestDirOption,
    //     );
    //     componentsDir = userComponentsDestDirOption;
    //   }
    // } else {

    //    const componentsDir = resolveBuild('compose-icons'); // ✅
    //     await createDir(componentsDir);
    //   // TODO: Not now see [ROADMAP.md](https://github.com/arthur-plazanet/nuxt-compose-icons/main/ROADMAP.md)
    //   componentsDir = await createDir(defaultDir);
    // }

    const userDir = options.generatedComponentOptions.componentsDestDir;

    const componentsDir = userDir
      ? path.isAbsolute(userDir)
        ? userDir
        : resolveApp(userDir)
      : defaultDir;

    await createDir(componentsDir);

    logger.info('📟 componentsDir →', componentsDir);

    // const componentsDir = componentsDestDir
    //   ? await createDir(path.resolve(nuxt.options.rootDir, componentsDestDir))
    //   : await createDir(defaultDir);

    if (pathToIcons) {
      // Resolve the path to the icons directory provided
      const absolutePathToIcons = path.isAbsolute(pathToIcons)
        ? pathToIcons
        : resolveApp(pathToIcons);

      if (fs.existsSync(absolutePathToIcons) && fs.statSync(absolutePathToIcons).isDirectory()) {
        // We first read all the files recursively to flatten the structure
        const files = await readDirectoryRecursively(absolutePathToIcons);

        // List of generated Icon components
        const generatedComponents: Component[] = [];

        /*
         * Dry run mode: log the component names and paths without writing files
         */
        /*
         * Dry run mode: log the component names and paths without writing files
         */
        if (options.dryRun) {
          nuxt.hook('build:before', () => {
            logger.info(`🔍 Dry-run mode: No files will be written.`);
            files.forEach((file) => {
              const fileInfo = path.parse(file);
              const name = generateComponentName(fileInfo.name, options);
              logger.info(`${fileInfo.base} Would generate: ${name}`);
            });
            process.exit();
          });
        }

        /*
         * For each file we:
         * 1. Parse the content (as HTML string)
         * 2. Optimize with SVGO
         * 3. Create the component code as literal string template by:
         *   . Recreating the Vue VNode structure dynamically based on the SVG content
         *   . Set the props and attributes based on the SVG content and the options passed
         * 4. Write the component to the file system
         * 5. Create the "official" component object with the name and path
         * 6. Add the component to the Nuxt app's components array at build time
         * 7. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
         * 8. Add composables
         * 9. Generate the icons index file
         * 10. Generate the icon registry file
         *
         * We use a literal string template to create the Vue component
         * see https://nuxt-compose-icons.arthurplazanet.com/why-literal-strings-to-create-vue-components
         */
        // nuxt.hook('build:before', async () => {
        for (const filePath of files) {
          const fileInfo = path.parse(filePath);

          if (fileInfo.ext !== '.svg') {
            continue;
          }

          // 1. Parse the content (as HTML string)
          let svgContent = await fsp.readFile(filePath, 'utf-8');

          // 2. Optimize with SVGO
          svgContent = optimizeSvg(svgContent);

          // TODO: Check if necessary to handle snake case as well

          // TODO: handle double dashes "--", and if ".svg" already present
          const componentName = generateComponentName(fileInfo.name, options);

          // 3. Create the component code as literal string template
          const componentCode = createSvgComponentCode(componentName, svgContent);

          // 4. Write the component to the file system
          const generatedFilePath = await writeComponentFile(
            componentName,
            componentsDir,
            componentCode,
          );

          // 5. Create the "official" component object with the name and path
          const component = createComponentFromName({
            name: componentName,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });

          // 5.5 Store the component in array for later use
          generatedComponents.push(component);

          logger.success(`✅ Generated component: ${componentName} from ${fileInfo.base}`);

          // 6. Add the component to the Nuxt app's components array at build time
          // nuxt.hook('components:extend', (components) => {
          // components.push(component);
          // });
          // addComponent({
          //   name: component.pascalName,
          //   filePath: component.filePath,
          // });

          // addImportsSources({
          //   from: resolver.resolve('runtime/types'),
          //   imports: [
          //     {
          //       name: 'types',
          //       as: 'types',
          //     },
          //   ],
          // });
        }

        // });

        logger.info(`📦 - Registering components from ${componentsDir}`);
        // addComponentsDir({
        //   path: componentsDir,
        //   extensions: ['vue'], // 👈 critical
        //   ignore: ['index.ts', 'icon-registry.ts'],
        //   // prefix: options.generatedComponentOptions.prefix,
        // });

        // 7. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
        const { cssFileContent } = generateCssFile(iconSizes);

        // Define the path to save the CSS file within the module
        // const iconRootVars = resolve('./runtime/assets/compose-sizes.css');
        // await writeFile(iconRootVars, cssContent);
        // nuxt.options.css.push(iconRootVars);

        // const iconClasses = resolve('./runtime/assets/compose-icon.css');
        // nuxt.options.alias = {
        //   '@': './runtime',
        // };
        // 2. Register a single template that merges them
        // const tpl = addTemplate({
        //   filename: 'compose-icons.css',
        //   getContents: () => `${iconRootVars}\n\n${iconClasses}`,
        // });
        // logger.log('📟 - tpl → ', tpl);

        const optimizedCssFileContent = optimizeCss(cssFileContent);
        const tpl = addTemplate({
          filename: 'nuxt-compose-icons/compose-sizes.css',
          getContents: () => optimizedCssFileContent,
        });
        nuxt.options.css.push(tpl.dst); // ✅ this is in buildDir

        // const optimizedCssClasses = optimizeCss(cssClasses);
        // const tplClasses = addTemplate({
        //   filename: 'nuxt-compose-icons/compose-icons.css',
        //   getContents: () => optimizedCssClasses,
        // });
        // nuxt.options.css.push(tplClasses.dst); // ✅ this is in buildDir
        // //  write file locally
        // await writeFile(
        //   resolve('./runtime/assets/compose-icons.css'),
        //   `${optimizedIconRootVars}\n\n${optimizedCssClasses}`,
        // );
        // // Inject into the Nuxt build
        // // nuxt.options.css.push(tpl.dst);
        // // Push the CSS file into the Nuxt app's CSS array
        // nuxt.options.css.push(cssClasses);

        addImportsDir(resolve('runtime/types'));
        addImportsDir(resolve('runtime/utils'));

        // 8. Add composables
        addImportsDir(resolve('runtime/composables'));

        // 9. Generate the icons index file
        const iconsIndexContent = generateIconsIndex(generatedComponents);
        const indexPath = resolve(componentsDir, 'index.ts');
        await writeFile(indexPath, iconsIndexContent);

        // 10. Generate the icon registry file
        const iconsRegistryContent = await generateIconsRegistry(generatedComponents);
        const registryPath = resolve(componentsDir, 'icon-registry.ts');
        await writeFile(registryPath, iconsRegistryContent);

        // write also localy TODO:
        const localRegistryPath = resolve('./runtime/utils/icon-registry.ts');
        await writeFile(localRegistryPath, iconsRegistryContent);

        /**
         * TODO: description
         */
        // addTypeTemplate({
        //   filename: 'types/my-module.d.ts',
        //   getContents: () => `// Generated by my-module
        // declare module 'nuxt-compose-icons' {
        //   export { useComposeIcon, useComposeIconRegistry } from 'nuxt-compose-icons/dist/runtime/composables';
        // }
        // declare module 'nuxt-compose-icons/composables' {
        //   export { useComposeIcon, useComposeIconRegistry } from 'nuxt-compose-icons/dist/runtime/composables';
        // }
        // declare module 'nuxt-compose-icons/utils' {
        //   export { generateColorVariable, getIconSizeClass } from 'nuxt-compose-icons';
        //   export { useComposeIcon, useComposeIconRegistry } from 'nuxt-compose-icons/dist/runtime/composables/compose-icon';
        // }
        // declare module 'nuxt-compose-icons/types' {
        //   export { IconSize } from 'nuxt-compose-icons';
        //   export type {
        //     ComposeIconProps,
        //     ComposeIconSize,
        //     IconSizeKey,
        //     IconSizeKeyValue,
        //   } from 'nuxt-compose-icons';
        // }
        // declare module 'nuxt-compose-icons/components' {
        //   export * from ${JSON.stringify(componentsDir)}
        // }`,
        // });

        // addImports({
        //   name: 'useComposeIcon', // name of the composable to be used
        //   as: 'useComposeIcon',
        //   from: resolve('runtime/composables/compose-icon'), // path of composable
        // });
        // nuxt.hook('components:dirs', (dirs) => {
        //   dirs.push({
        //     path: path.resolve(__dirname, './runtime/components/icon-generated'),
        //     prefix: 'Compose',
        //   });
        // });
        for (const c of generatedComponents) {
          addComponent({
            name: c.pascalName,
            filePath: c.filePath,
          });
        }
        //     nuxt.hook('components:extend', async (components) => {
        //   for (const c of generatedComponents) {
        //     components.push({
        //       ...c,
        //     });
        //   }
        // });
      } else {
        logger.error(`Folder does not exist: ${absolutePathToIcons}`);
        throw new Error(`Folder does not exist: ${absolutePathToIcons}`);
      }
    } else if (iconComponentList) {
      Object.keys(iconComponentList).forEach((iconComponentName) => {
        logger.info('📟 - iconComponentName → ', iconComponentName);
        // const test = resolveComponent(iconComponentList[iconComponentName]);
        // TODO: Check if necessary to handle snake case as well
        // const componentName = toPascalCase(iconComponentName).replace(/&/g, 'And');
        // // const svgContent = ''; // Placeholder: you need to load the actual SVG content as needed
        // // const componentCode = createSvgComponentCode(componentName, svgContent);
        // // const componentCode = iconComponentList[iconComponentName];
        // const generatedFilePath = path.resolve(__dirname, './playground/icon-list.ts');
        // const component = createComponentFromName({
        //   ...options.generatedComponentOptions,
        //   name: componentName,
        //   shortPath: generatedFilePath,
        //   filePath: generatedFilePath,
        // });
        // nuxt.hook('components:extend', (components) => {
        //   components.push(component);
        // });
      });
    }
  },
});
