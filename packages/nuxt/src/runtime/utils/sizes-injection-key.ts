import type { InjectionKey } from 'vue';
import type { ComposeIconSize } from '../types';

/**
 * Carries the project's configured icon sizes across the Vue app boundary via plain
 * provide/inject, instead of Nuxt's useRuntimeConfig — `nuxt/app` fails to even *resolve*
 * outside a real Nuxt build, which broke every non-Nuxt consumer (VitePress, Storybook, a
 * plain Vue app) of the generated components. inject(key, fallback) degrades gracefully
 * where useRuntimeConfig would hard-fail.
 */
export const SIZES_INJECTION_KEY: InjectionKey<ComposeIconSize> = Symbol(
  'nuxt-compose-icons:sizes',
);
