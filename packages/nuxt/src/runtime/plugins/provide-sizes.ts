import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import type { PublicIconSizes } from '../types/icon-sizes';
import { SIZES_INJECTION_KEY } from '../utils/sizes-injection-key';

/**
 * Bridges Nuxt's runtimeConfig to plain Vue provide/inject. This file is only ever loaded
 * inside a real Nuxt build (registered via addPlugin in module.ts), so useRuntimeConfig is
 * safe here — the composables that consume the injected value never import 'nuxt/app'
 * themselves, which is what makes them usable outside Nuxt too.
 *
 * Must call `nuxtApp.vueApp.provide(...)` directly rather than returning `{ provide: {...} }`
 * from the plugin: Nuxt's own plugin-level `provide` iterates the object with `for...in` to
 * create `$`-prefixed nuxtApp globals, which silently skips Symbol keys — a Symbol injection
 * key (needed so plain Vue `inject()` works for non-Nuxt consumers too) never reached Vue's
 * actual provide/inject chain that way, so every consumer always saw {} regardless of config.
 */

export default defineNuxtPlugin({
  name: 'provide-sizes',
  setup(nuxtApp) {
    const publicRuntimeConfig = useRuntimeConfig().public;

    // Cast, not a workaround to remove: useRuntimeConfig() (nuxt/app) types RuntimeConfig from
    // 'nuxt/schema', not '@nuxt/schema'. Nuxt bridges a hand-picked set of interfaces
    // (NuxtConfig, NuxtOptions, ...) from '@nuxt/schema' into 'nuxt/schema' for exactly this
    // reason (see node_modules/nuxt/schema.d.ts) — RuntimeConfig/PublicRuntimeConfig aren't on
    // that list, so augmenting '@nuxt/schema' per the docs never reaches this call's type.
    const composeIcons = publicRuntimeConfig.composeIcons as PublicIconSizes;
    nuxtApp.vueApp.provide(
      SIZES_INJECTION_KEY,
      ((composeIcons && composeIcons.iconSizes) ?? {}) as Record<string, string>,
    );
  },
});
