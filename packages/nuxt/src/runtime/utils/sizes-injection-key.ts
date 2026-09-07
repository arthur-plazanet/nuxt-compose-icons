import type { InjectionKey } from 'vue';
import type { PublicIconSizes } from '../types/icon-sizes';

/**
 * Carries configured icon sizes and defaultSize across the Vue app boundary via plain
 * provide/inject rather than useRuntimeConfig, which needs 'nuxt/app' and fails to resolve
 * outside a real Nuxt build — breaking every non-Nuxt consumer of generated components.
 */
export const iconSizesKey: InjectionKey<PublicIconSizes> = Symbol('nuxt-compose-icons:sizes');
