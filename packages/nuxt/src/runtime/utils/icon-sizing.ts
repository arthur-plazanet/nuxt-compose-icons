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
 * Parses a CSS length into a comparable px-equivalent number. `rem`/`em` assume the common
 * 16px root, which is only ever used for *relative ordering* between sizes, never rendered —
 * an actual different root font size doesn't change which size is visually bigger. Values that
 * aren't a plain length (`var(--x)`, `clamp(...)`, tokens, etc.) can't be compared this way and
 * return null, so they keep their original relative order instead of being sorted arbitrarily.
 */
function parseSizeForSort(value: string): number | null {
  const match = /^(-?[\d.]+)(px|rem|em|%)?$/.exec(value.trim());
  if (!match) return null;
  const num = Number.parseFloat(match[1]);
  if (Number.isNaN(num)) return null;
  switch (match[2]) {
    case 'rem':
    case 'em':
      return num * 16;
    default:
      return num;
  }
}

/**
 * Merges a project's configured sizes on top of the defaults — the one merge every icon
 * consumer must agree on (codegen's `size` prop default, the generated CSS, and the runtime
 * fallback all key off the exact same resulting map). Previously duplicated independently in
 * module.ts and generate-css-file.ts, which is exactly the kind of drift resolveDefaultSizeKey
 * was written to prevent for the default key specifically.
 *
 * Also reorders the merge by real (parsed) size, ascending, rather than leaving it in
 * default-keys-then-custom-keys insertion order — a size picker iterating `Object.keys()`
 * (e.g. the playground) would otherwise jump around non-monotonically once custom keys like
 * `xs`/`huge` are appended after the defaults. Unparseable values (CSS vars, `clamp()`, design
 * tokens) keep their relative position instead of being sorted, since their real size isn't
 * knowable at build time.
 */
export function resolveFinalSizes(iconSizes?: ComposeIconSize): Record<string, string> {
  const merged = { ...iconSizeDefault, ...iconSizes } as Record<string, string>;
  const entries = Object.entries(merged);

  // Sort only the parseable entries against each other, then fill back into the original
  // sequence one at a time wherever a parseable entry used to be — a plain `.sort()` over the
  // whole list can't do this correctly, since mixing "keep original position" (for unparseable
  // entries) and "compare by value" (for parseable ones) in one comparator isn't a transitive
  // order, which real sort algorithms silently produce wrong results for.
  const parseableSorted = entries
    .filter(([, value]) => parseSizeForSort(value) !== null)
    .sort((a, b) => parseSizeForSort(a[1])! - parseSizeForSort(b[1])!);
  let nextParseable = 0;
  const result = entries.map(([key, value]) =>
    parseSizeForSort(value) === null ? ([key, value] as const) : parseableSorted[nextParseable++],
  );
  return Object.fromEntries(result);
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
