import type { ClassValue, StyleValue, SVGAttributes } from 'vue';
import { computed } from 'vue';
import type { ComposeIconProps } from '../types';
import { getIconSizeClass } from '../utils';
import { isRawCssSize } from '../utils/icon-theming';

export { useComposeIcon };
export type { UseComposeIcon };

interface UseComposeIcon {
  iconStyles: StyleValue;
  iconClasses: ClassValue[];
  buildSvgAttributes: (svgAttributes?: SVGAttributes) => SVGAttributes & {
    style: StyleValue;
    class: ClassValue;
  };
}

/**
 * Composes the icon styles, classes, and attributes based on the provided props.
 *
 * @param {ComposeIconProps} props
 * @returns {UseComposeIcon} The composed icon styles, classes, and attributes.
 */
function useComposeIcon(props: ComposeIconProps): UseComposeIcon {
  // 1) Size
  const size = computed<string>(() => props.size ?? 'md');

  const iconSizeClass = computed(() => getIconSizeClass(size.value));
  // 2) Styles: only include what's defined
  const iconStyles = computed<StyleValue>(() => {
    const style: StyleValue = {};
    const strokeOrColor = props.stroke ?? props.color;

    if (size.value && isRawCssSize(size.value)) {
      style['--icon-size'] = size.value;
    }

    if (strokeOrColor != null && strokeOrColor !== '') {
      style['--icon-stroke'] = strokeOrColor;
    }
    if (props.strokeWidth != null && props.strokeWidth !== '') {
      style['--icon-stroke-width'] = props.strokeWidth;
    }
    if (props.fill != null && props.fill !== '') {
      style['--icon-fill'] = props.fill;
    }

    return style;
  });

  // 3) Base classes
  const iconClasses = computed(() => [iconSizeClass.value]);

  const buildSvgAttributes = (
    svgAttributes?: SVGAttributes,
  ): SVGAttributes & { style: StyleValue; class: ClassValue } => {
    // If the svg already has a class, we need to include it in the final classes
    const initialClasses: ClassValue = svgAttributes?.class;

    return {
      ...svgAttributes,
      style: iconStyles.value,
      class: [initialClasses, ...iconClasses.value],
    };
  };

  return {
    iconStyles: iconStyles.value,
    iconClasses: iconClasses.value,
    buildSvgAttributes,
  };
}
