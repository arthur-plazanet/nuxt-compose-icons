import { inject } from 'vue';
import type { PublicIconSizes } from '../types/icon-sizes';
import { resolveDefaultSizeKey } from '../utils/icon-sizing';
import { iconSizesKey } from '../utils/sizes-injection-key';

interface ComposeIconTheme {
  /** All configured size keys and their resolved CSS values */
  iconSizes: Record<string, string>;
  /** The key used when no `size` prop is passed — same resolution generated components use */
  defaultSizeKey: string;
  /** Returns the CSS var reference for a given size key, e.g. `sizeVar('lg')` → `'var(--size-lg)'` */
  sizeVar: (size: string) => string;
  /** CSS var for the size currently applied to the nearest icon in the cascade */
  currentSizeVar: string;
}

/**
 * Reads the module's configured icon sizes via plain provide/inject rather than
 * useRuntimeConfig, which needs 'nuxt/app' and fails to resolve outside a real Nuxt build —
 * breaking every non-Nuxt consumer (VitePress, Storybook, a plain Vue app) of the generated
 * components. Falls back to {} if the module's plugin never ran.
 */
export function useComposeIconTheme(): ComposeIconTheme {
  const { iconSizes = {}, defaultSize } = inject(iconSizesKey, {} as PublicIconSizes);

  return {
    iconSizes,
    defaultSizeKey: resolveDefaultSizeKey(iconSizes, defaultSize),
    sizeVar: (size) => `var(--size-${size})`,
    currentSizeVar: 'var(--icon-size)',
  };
}
