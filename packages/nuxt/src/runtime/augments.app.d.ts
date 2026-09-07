import type { PublicIconSizes } from './types/icon-sizes';

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    composeIcons: PublicIconSizes;
  }
}

export {};
