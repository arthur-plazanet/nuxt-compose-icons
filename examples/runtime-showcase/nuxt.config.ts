import type { NuxtComposeIconsOptions } from 'nuxt-compose-icons';

const options: NuxtComposeIconsOptions = {
  pathToIcons: './app/assets/icons',
  component: {
    suffix: 'Icon',
    case: 'pascal',
    destDir: './app/components/icons',
    hasIndexFile: true,
  },
  includeComposables: true,
  iconSizes: {
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   host: 'localhost',
  //   port: 3008,
  // },
  // debug: true,
  modules: ['nuxt-compose-icons', '@nuxt/test-utils/module'],
  // Module options
  composeIcons: options,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-08-17',
});
