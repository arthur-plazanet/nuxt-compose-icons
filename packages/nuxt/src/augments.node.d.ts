import type { NuxtComposeIconsOptions } from './module';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    composeIcons?: NuxtComposeIconsOptions;
  }

  interface NuxtOptions {
    composeIcons?: NuxtComposeIconsOptions;
  }
}
