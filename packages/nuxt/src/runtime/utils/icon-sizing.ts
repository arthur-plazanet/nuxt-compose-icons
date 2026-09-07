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
 * Parses a CSS length to a comparable px-equivalent, for sorting only — rem/em assume a 16px
 * root but that value is never rendered, only compared. Returns null for anything that isn't a
 * plain length (`var(...)`, `clamp(...)`, tokens), so those are left unsorted.
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
 * Resolves the project's final size scale, shared by codegen's `size` prop default, the
 * generated CSS, and the runtime fallback so all three agree on the same map.
 *
 * `iconSizes`, when given, fully replaces the defaults rather than merging with them — it's
 * your whole scale, not a patch. Only omitting it entirely applies the built-in sm/md/lg/xl.
 *
 * Result is ordered by real (parsed) size, ascending, rather than declaration order — a size
 * picker iterating `Object.keys()` would otherwise render non-monotonically. Unparseable values
 * (CSS vars, `clamp()`, tokens) keep their original relative position instead.
 */
export function resolveFinalSizes(iconSizes?: ComposeIconSize): Record<string, string> {
  const sizes = (iconSizes ?? iconSizeDefault) as Record<string, string>;
  const entries = Object.entries(sizes);

  // Sort just the parseable entries, then refill them into their original slots — one
  // comparator can't mix "keep position" and "compare by value" into a valid order.
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
 * Resolves the default size key: `defaultSize` if it names a real key, else `'md'` if present,
 * else the first configured key — arbitrary (the smallest once sorted) but never crashes.
 * Shared by build-time codegen and the runtime fallback so both agree on the same default.
 */
export function resolveDefaultSizeKey(
  iconSizes: Record<string, string>,
  defaultSize?: string,
): string {
  if (defaultSize && defaultSize in iconSizes) {
    return defaultSize;
  }
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
