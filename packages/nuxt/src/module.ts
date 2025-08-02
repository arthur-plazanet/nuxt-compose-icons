import { addImportsDir, createResolver, defineNuxtModule, useLogger } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import * as fs from 'node:fs';
import { promises as fsp } from 'node:fs';

import * as path from 'node:path';
import { IconSize, type ComposeIconSize } from './runtime/types';
import {
  createComponentFromName,
  createComponentsDir,
  createSvgComponentCode,
  generateComponentName,
  generateCssFile,
  readDirectoryRecursively,
  writeComponentFile,
} from './utils';
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
   * The prefix to use for the component - default false
   */
  prefix?: string;
  /**
   * The suffix to use for the component
   * default "Icon" ( PascalCase ) and "-icon" ( kebab-case )
   */
  suffix: string;
  /**
   * Case to use for the component name
   * default "pascal"
   */
  case: 'pascal' | 'kebab';
  /**
   * TODO: The directory to save the generated components
   * default "runtime/components/icons-generated"
   */
  componentsDestDir?: string;
}

export interface NuxtComposeIconsOptions {
  /*
   * The path to the icons directory
   */
  pathToIcons?: string;
  iconComponentList?: { [key: string]: Component };
  iconSizes?: ComposeIconSize;
  generatedComponentOptions: GeneratedComponentOptions;
}

export default defineNuxtModule<NuxtComposeIconsOptions>({
  meta: {
    name: 'nuxt-compose-icons',
    configKey: 'composeIcons',
  },
  // Default configuration options of the Nuxt module
  defaults: {
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
      componentsDestDir: 'runtime/components/icons-generated',
    },
    iconComponentList: {},
  },
  async setup(options, nuxt) {
    const logger = useLogger('nuxt-compose-icons');
    const { pathToIcons, iconComponentList, iconSizes } = options;
    const componentsDestDir = options.generatedComponentOptions.componentsDestDir as string;

    if (!pathToIcons && !iconComponentList) {
      logger.error(
        'You must provide either pathToIcons or iconComponentList in the module options.',
      );
      throw new Error('pathToIcons or iconComponentList is required');
    }

    const resolver = createResolver(import.meta.url);

    // Create components directory and remove it first if it exists
    const componentsDir = createComponentsDir(resolver.resolve(componentsDestDir));

    if (pathToIcons) {
      // Resolve the path to the icons directory provided
      const absolutePathToIcons = path.resolve(nuxt.options.rootDir, pathToIcons);

      if (fs.existsSync(absolutePathToIcons) && fs.statSync(absolutePathToIcons).isDirectory()) {
        // We first read all the files recursively to flatten the structure
        const files = await readDirectoryRecursively(absolutePathToIcons);

        /*
         * For each file we:
         * 1. Parse the content (as HTML string)
         * 2. Create the component code as literal string template by:
         *   . Recreating the Vue VNode structure dynamically based on the SVG content
         *   . Set the props and attributes based on the SVG content and the options passed
         * 3. Write the component to the file system
         * 4. Create the "official" component object with the name and path
         * 5. Add the component to the Nuxt app's components array at build time
         * 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
         *
         * We use a literal string template to create the Vue component
         * see https://nuxt-compose-icons.arthurplazanet.com/why-literal-strings-to-create-vue-components
         */
        files.forEach(async (filePath) => {
          const fileInfo = path.parse(filePath);

          if (fileInfo.ext !== '.svg') {
            return;
          }

          // 1. Parse the content (as HTML string)
          const svgContent = await fsp.readFile(filePath, 'utf-8');

          // TODO: Check if necessary to handle snake case as well
          // TODO: handle double dashes "--", and if ".svg" already present
          const componentName = generateComponentName(fileInfo.name, options);

          // 2. Create the component code as literal string template
          const componentCode = createSvgComponentCode(componentName, svgContent);

          // 3. Write the component to the file system
          const generatedFilePath = writeComponentFile(
            componentName,
            componentsDir,
            componentCode,
            true,
          );

          // 4. Create the "official" component object with the name and path
          const component = createComponentFromName({
            name: componentName,
            shortPath: generatedFilePath,
            filePath: generatedFilePath,
          });

          // 5. Add the component to the Nuxt app's components array at build time
          nuxt.hook('components:extend', (components) => {
            components.push(component);
          });

          // addImportsSources({
          //   from: resolver.resolve('runtime/types'),
          //   imports: [
          //     {
          //       name: 'types',
          //       as: 'types',
          //     },
          //   ],
          // });
        });

        // 6. Generate a CSS file with the icon sizes and add it to the Nuxt app's CSS array at build time
        const cssContent = generateCssFile(iconSizes);

        // Define the path to save the CSS file within the module
        const iconRootVars = path.resolve(__dirname, './runtime/assets/compose-sizes.css');
        // // Ensure the directory exists
        await fsp.mkdir(path.dirname(iconRootVars), { recursive: true });
        // // Write the CSS content to the file
        await fsp.writeFile(iconRootVars, cssContent, 'utf-8');

        const iconClasses = resolver.resolve('./runtime/assets/compose-icon.css');
        // nuxt.options.alias = {
        //   '@': './runtime',
        // };
        // 2. Register a single template that merges them
        // const tpl = addTemplate({
        //   filename: 'compose-icons.css',
        //   getContents: () => `${iconRootVars}\n\n${iconClasses}`,
        // });
        // console.log('📟 - tpl → ', tpl);

        // 3. Inject into the Nuxt build
        // nuxt.options.css.push(tpl.dst);
        // // Push the CSS file into the Nuxt app's CSS array
        nuxt.options.css.push(iconRootVars);
        nuxt.options.css.push(iconClasses);

        addImportsDir(resolver.resolve('runtime/types'));
        addImportsDir(resolver.resolve('runtime/utils'));

        // nuxt.hook('components:dirs', (dirs) => {
        //   dirs.push({
        //     path: path.resolve(__dirname, './runtime/components/icon-generated'),
        //     prefix: 'Compose',
        //   });
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
