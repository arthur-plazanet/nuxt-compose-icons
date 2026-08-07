import { fileURLToPath } from 'node:url';
import { type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '48px',
  huge: '100px',
};

export default defineNuxtConfig({
  modules: [fileURLToPath(new URL('../src/module', import.meta.url))],
  // Module options
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
    iconSizes,
    component: {
      suffix: 'Icon',
      case: 'pascal',
      destDir: './components/nuxt-compose-icons',
      iconClasses: ['my-custom-icon-class'],
    },
    includeOverview: true,
    // debug: true,
    // dryRun: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
