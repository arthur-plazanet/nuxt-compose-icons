import type { ComposeIconSize } from '../types';

export { iconSizeDefault };
export type { DefaultSizes };
/**
 * Default icon sizes if none have been provided to the module
 */

type DefaultSizes = ComposeIconSize & {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

// Default icon sizes if none have been provided to the module
const iconSizeDefault: DefaultSizes = {
  sm: '1.5rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
};

/**
 * Merges a project's configured sizes on top of the defaults — the one merge every icon
 * consumer must agree on (codegen's `size` prop default, the generated CSS, and the runtime
 * fallback all key off the exact same resulting map). Previously duplicated independently in
 * module.ts and generate-css-file.ts, which is exactly the kind of drift resolveDefaultSizeKey
 * was written to prevent for the default key specifically.
 */
export function resolveFinalSizes(iconSizes?: ComposeIconSize): Record<string, string> {
  return { ...iconSizeDefault, ...iconSizes } as Record<string, string>;
}

/**
 * Resolves which configured size key is used when no `size` prop is passed.
 *
 * 'md' is the documented default (docs/utilities/use-compose-icon.md) and is kept whenever
 * the caller's iconSizes actually define it. `Object.keys(iconSizes)[0]` is not a safe
 * substitute on its own — for `iconSizeDefault` it resolves to `'sm'` (its literal declaration
 * order), not the documented default — so it's only used as a fallback when 'md' isn't a
 * configured key. Shared between build-time codegen (module.ts) and the runtime fallback
 * (useComposeIcon) so both agree on the same default instead of drifting.
 */
export function resolveDefaultSizeKey(iconSizes: Record<string, string>): string {
  return 'md' in iconSizes ? 'md' : (Object.keys(iconSizes)[0] ?? 'md');
}

/**
 * Resolve Icon size class based on the provided size prop
 */
export function getIconSizeClass(size: string): string {
  // if size is a raw CSS value (token etc.), no class is applied
  if (isRawCssSize(size)) {
    return '';
  }
  // tokens become classes like size-md, size-hero, size-24 etc.
  // raw values handled via inline styles instead
  return `size-${size}`;
}

export function isRawCssSize(value: string) {
  const v = value.trim();
  return (
    /\d/.test(v) ||
    v.startsWith('var(') ||
    v.startsWith('clamp(') ||
    v.startsWith('min(') ||
    v.startsWith('max(') ||
    v.startsWith('calc(')
  );
}
