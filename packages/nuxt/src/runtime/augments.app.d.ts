import type { ComposeIconSize } from './types/icon-sizes';

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    public: {
      composeIcons: {
        iconSizes: ComposeIconSize;
      };
    };
  }
}
