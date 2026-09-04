import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import { SIZES_INJECTION_KEY } from '../utils/sizes-injection-key';

/**
 * Bridges Nuxt's runtimeConfig to plain Vue provide/inject. This file is only ever loaded
 * inside a real Nuxt build (registered via addPlugin in module.ts), so useRuntimeConfig is
 * safe here — the composables that consume the injected value never import 'nuxt/app'
 * themselves, which is what makes them usable outside Nuxt too.
 */

// TODO-CLAUDE: Is there any difference with previous? We still need to import from nuxt/app?
export default defineNuxtPlugin({
  name: 'provide-sizes',
  setup() {
    const publicRuntimeConfig = useRuntimeConfig().public;

    const composeIcons = publicRuntimeConfig.composeIcons;
    return {
      provide: {
        [SIZES_INJECTION_KEY]: ((composeIcons && composeIcons.iconSizes) ?? {}) as Record<
          string,
          string
        >,
      },
    };
  },
});
