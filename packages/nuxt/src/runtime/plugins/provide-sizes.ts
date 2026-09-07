import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import type { PublicIconSizes } from '../types/icon-sizes';
import { iconSizesKey } from '../utils/sizes-injection-key';

/**
 * Bridges Nuxt's runtimeConfig to plain Vue provide/inject — only ever loaded inside a real
 * Nuxt build (via addPlugin in module.ts), so useRuntimeConfig is safe here even though the
 * composables that read the injected value avoid 'nuxt/app' themselves.
 *
 * Must call `nuxtApp.vueApp.provide(...)` directly, not return `{ provide: {...} }` from the
 * plugin: Nuxt's plugin-level `provide` only iterates string keys (`for...in`), silently
 * dropping the Symbol key this relies on — every consumer used to see {} regardless of config.
 */

export default defineNuxtPlugin({
  name: 'provide-sizes',
  setup(nuxtApp) {
    const publicRuntimeConfig = useRuntimeConfig().public;

    // Cast, not a workaround to remove: useRuntimeConfig() types RuntimeConfig from 'nuxt/schema',
    // not '@nuxt/schema' — Nuxt only bridges a hand-picked set of interfaces between the two
    // (see node_modules/nuxt/schema.d.ts), and RuntimeConfig/PublicRuntimeConfig aren't on it.
    const composeIcons = publicRuntimeConfig.composeIcons as PublicIconSizes | undefined;
    nuxtApp.vueApp.provide(iconSizesKey, {
      iconSizes: composeIcons?.iconSizes ?? {},
      defaultSize: composeIcons?.defaultSize,
    });
  },
});
