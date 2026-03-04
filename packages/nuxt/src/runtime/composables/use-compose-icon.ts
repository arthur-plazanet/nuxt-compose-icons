import { computed, type SVGAttributes } from 'vue';
import type { ComposeIconProps } from '../types';
import { getIconSizeClass } from '../utils';
import { iconSizeDefault } from '../utils/icon-theming';

export { useComposeIcon };
export type { UseComposeIcon };
interface UseComposeIcon {
  iconStyles: Record<string, string | number | undefined>;
  iconClasses: string[];
  iconAttributes: {
    style: Record<string, string | number | undefined>;
    class: string[];
    viewBox?: string;
  };
  buildSvgAttributes: (svgAttributes?: SVGAttributes) => SVGAttributes & {
    style: Record<string, string | number | undefined>;
    class: string[];
  };
}

function isRawCssSize(v: string) {
  // crude but effective: tokens are simple words, raw sizes contain digits or '(' or 'var('
  return /[\d(]/.test(v) || v.startsWith('var(');
}

/**
 * Composes the icon styles, classes, and attributes based on the provided props.
 *
 * @param {ComposeIconProps} props
 * @returns {UseComposeIcon} The composed icon styles, classes, and attributes.
 */
function useComposeIcon(props: ComposeIconProps): UseComposeIcon {
  // 1) Size
  const size = computed<string>(() => (props.size ? props.size : iconSizeDefault.md));

  const iconSizeClass = computed(() => getIconSizeClass(size.value));
  // 2) Styles: only include what’s defined
  const iconStyles = computed<Record<string, string | number | undefined>>(() => {
    const style: Record<string, string | number | undefined> = {};
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
  const iconClasses = computed(() => ['compose-icon', iconSizeClass.value]);

  const buildSvgAttributes = (
    svgAttributes?: SVGAttributes,
  ): SVGAttributes & { style: Record<string, string | number | undefined>; class: string[] } => {
    return {
      ...svgAttributes,
      style: iconStyles.value,
      class: iconClasses.value,
    };
  };

  const iconAttributes = computed(() => ({
    style: iconStyles.value,
    class: iconClasses.value,
  }));

  return {
    iconStyles: iconStyles.value,
    iconClasses: iconClasses.value,
    iconAttributes: iconAttributes.value,
    buildSvgAttributes,
  };
}
