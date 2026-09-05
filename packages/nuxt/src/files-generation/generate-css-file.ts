import type { ComposeIconSize } from '../runtime/types/icon-sizes';
import { resolveFinalSizes } from '../runtime/utils/icon-sizing';
import { formatCssClass, formatCssRootVars, generateComment } from './template';

/**
 * Generates a CSS string with icon size classes and :root CSS variables.
 *
 * Produces:
 * - `:root` vars: `--size-xs`, `--size-sm`, etc. (merged with defaults)
 * - `.compose-icon.size-xs { --icon-size: var(--size-xs) }` etc.
 *
 * If the component `size` prop changes, it updates `--icon-size` via the matching
 * size class, driving width/height entirely through CSS with no extra JavaScript.
 *
 * @param iconSizes - Custom sizes merged on top of the defaults
 * @param iconClasses - CSS classes scoping the size rules (always includes `compose-icon`)
 * @returns Generated CSS content as a string
 */
export function generateCssFile({
  iconSizes,
  iconClasses = ['compose-icon'],
}: {
  iconSizes?: ComposeIconSize;
  iconClasses?: string[];
}): string {
  const sizes = resolveFinalSizes(iconSizes);

  const rootVars = formatCssRootVars(
    Object.fromEntries(Object.keys(sizes).map((key) => [`size-${key}`, sizes[key]])),
  );

  const comment = generateComment([
    "We don't define fallback values to let the initial values subsist (if any).",
    'This catches the case of a missing prop — instead of a module default,',
    'we rely on the original value from the SVG.',
  ]);

  const selector = iconClasses.map((cls) => `.${cls}`).join(', ');

  const sizeClasses = Object.keys(sizes)
    .map((key) => formatCssClass(`size-${key}`, `--icon-size: var(--size-${key})`))
    .join('\n');

  return `${rootVars}${comment}${selector} {\n${sizeClasses}\n}`;
}
