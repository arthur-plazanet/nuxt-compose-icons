import { DefaultSizes, iconSizeDefault } from '../../runtime/utils/icon-theming';
import { formatCssRootVars, generateComment } from '../template';
import type { ComposeIconSize } from './../../runtime/types/icon-sizes';

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
  let rootIconSizes: Record<string, string>;

  if (!iconSizes) {
    const defaultSizes: DefaultSizes = { ...iconSizeDefault } as DefaultSizes;
    rootIconSizes = { ...defaultSizes };
  } else {
    rootIconSizes = { ...(iconSizes as Record<string, string>) };
  }

  const rootCssVarsContent: string = formatCssRootVars(
    Object.keys(rootIconSizes).reduce(
      (acc, key) => {
        acc[`size-${key}`] = rootIconSizes[key];
        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  let composeIconSizes = rootCssVarsContent;

  composeIconSizes += generateComment([
    "We don't define fallback values to let the initial values subsist (if any).",
    'This could catch the case of a missing prop and instead of a default value',
    'we would rely on the default from the SVG.',
  ]);
  composeIconSizes += `.compose-icon {\n`;
  // Base width and height class for icons
  const cssClasses = Object.entries(rootIconSizes)
    .map(([key]) => {
      const cssClass = `  &.size-${key} {
    --icon-size: var(--size-${key});
  }`;
      return cssClass;
    })
    .join('\n');

  composeIconSizes += cssClasses + '\n}';

  return {
    iconSizesRootVars: rootCssVarsContent,
    cssFileContent: `${composeIconSizes}`,
  };
}
