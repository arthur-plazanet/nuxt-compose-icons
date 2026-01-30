import { fileURLToPath } from 'node:url';
import MyModule from '../../../../src/module';
import type { ComposeIconSize } from '../../../../src/runtime/types';

const iconSizes: ComposeIconSize = {
  xs: '0.5rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
};

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3589,
  },
  modules: [MyModule],
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
    iconSizes,
    generatedComponentOptions: {
      prefix: 'build',
      suffix: 'icon',
      case: 'kebab',
      // componentsDestDir: './components/nuxt-compose-icons',
    },
  },
  components: {
    path: '~/components',
    pathPrefix: false,
  },
});
