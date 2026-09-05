import { inject } from 'vue';
import { SIZES_INJECTION_KEY } from '../utils/sizes-injection-key';

/**
 * Returns helpers to reference icon size CSS variables by key.
 * Size keys and values come from the module config, provided by a Nuxt plugin
 * (runtime/plugins/provide-sizes.ts) via plain Vue provide/inject.
 *
 * Deliberately does not import anything from 'nuxt/app': that import fails to resolve
 * outside a real Nuxt build, which broke this composable (and useComposeIcon, which calls
 * it) for any non-Nuxt consumer of the generated components. Outside Nuxt — or if the
 * module never ran — inject() falls back to {} instead of crashing.
 *
 * @example
 * const { iconSizes, sizeVar, currentSizeVar } = useComposeIconTheme()
 *
 * Object.keys(iconSizes)  // ['sm', 'md', 'lg', 'hero'] — from your config
 * sizeVar('lg')           // 'var(--size-lg)' — align any element to a named size
 * currentSizeVar          // 'var(--icon-size)' — whatever the nearest icon has in the cascade
 */
export function useComposeIconTheme() {
  const iconSizes = inject(SIZES_INJECTION_KEY, {} as Record<string, string>);

  return {
    /** All configured size keys and their resolved values */
    iconSizes,
    /** Returns the CSS var reference for a given size key */
    sizeVar: (size: string) => `var(--size-${size})`,
    /** CSS var for the size currently applied to the nearest icon in the cascade */
    currentSizeVar: 'var(--icon-size)' as const,
  };
}
