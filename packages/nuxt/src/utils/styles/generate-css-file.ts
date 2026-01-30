import type { ComposeIconSize } from '../../runtime/types';
import { IconSize } from '../../runtime/types';
import { formatCssRootVars } from '../template';

// Default icon sizes if none have been provided to the module
const defaultSizes: ComposeIconSize = {
  [IconSize.XS]: '1rem',
  [IconSize.SM]: '1.5rem',
  [IconSize.MD]: '2rem',
  [IconSize.LG]: '3rem',
  [IconSize.XL]: '4rem',
};

/**
 * Generate a CSS file with the custom icon sizes provided
 * that will then be used to style the icons (see /runtime/assets/compose-icon.css)
 *
 * .compose-icon {
 *   width: var(--icon-size);
 *   height: var(--icon-size);
 * }
 *
 * .compose-icon.Size-s {
 *  --icon-size: var(--icon-size-s);
 * }
 *
 * If the component prop change, it will update the '--icon-size' value
 * and since it's a CSS variable, it will automatically update the class applied to the icon
 * at runtime without involving too much JavaScript
 *
 * @export
 * @param {?ComposeIconSize} [iconSizes]
 * @returns {string} CSS generated content
 */
// export function generateCssFile(iconSizes?: ComposeIconSize): string {
//   const sizes = { ...defaultSizes, ...iconSizes };

//   const cssContent = `:root {
//   --icon-size-${IconSize.XS}: ${sizes[IconSize.XS]};
//   --icon-size-${IconSize.SM}: ${sizes[IconSize.SM]};
//   --icon-size-${IconSize.MD}: ${sizes[IconSize.MD]};
//   --icon-size-${IconSize.LG}: ${sizes[IconSize.LG]};
//   --icon-size-${IconSize.XL}: ${sizes[IconSize.XL]};
// }
// `;

//   return cssContent;
// }

export function generateCssFile(iconSizes?: ComposeIconSize): Record<string, string> {
  const sizes: ComposeIconSize = { ...defaultSizes, ...(iconSizes ?? {}) };

  let rootCssVarsContent: string = ``;

  // Base width and height class for icons
  let cssClassesContent: string = `.compose-icon {
  width: var(--icon-size);
  height: var(--icon-size);
\n`;

  Object.entries(sizes).forEach(([key, value]) => {
    rootCssVarsContent += `  --icon-size-${key}: ${value};\n`;

    // Generate corresponding CSS class
    cssClassesContent += `&.size-${key} { --icon-size: var(--icon-size-${key}); }`;
  });

  cssClassesContent += `}`;

  return { iconRootVars: formatCssRootVars(rootCssVarsContent), cssClasses: cssClassesContent };
}
