import { computed, type SVGAttributes } from 'vue';
import type { ComposeIconProps, IconSizeKeyValue } from '../types';
import { IconSize } from '../types';
import { getIconSizeClass } from '../utils';

export { useComposeIcon };
export type { UseComposeIcon };
interface UseComposeIcon {
  iconStyles: Record<string, string | undefined>;
  iconClasses: string[];
  iconAttributes: {
    style: Record<string, string | undefined>;
    class: string[];
    viewBox?: string;
  };
  buildSvgAttributes: (svgAttributes?: SVGAttributes) => SVGAttributes & {
    style: Record<string, string | undefined>;
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
  const size = computed<IconSizeKeyValue>(() => props.size ?? IconSize.MD);

  const iconSizeClass = computed(() => getIconSizeClass(size.value));
  // 2) Styles: only include what’s defined
  const iconStyles = computed<Record<string, string>>(() => {
    const style: Record<string, string> = {};
    const strokeOrColor = props.stroke ?? props.color;

    if (size.value && isRawCssSize(size.value)) {
      style['--icon-size'] = size.value;
    }

    if (strokeOrColor != null && strokeOrColor !== '') {
      style['--icon-stroke'] = String(strokeOrColor);
    }
    if (props.strokeWidth != null && props.strokeWidth !== '') {
      style['--icon-stroke-width'] = String(props.strokeWidth);
    }
    if (props.fill != null && props.fill !== '') {
      style['--icon-fill'] = String(props.fill);
    }

    return style;
  });

  // 3) Base classes
  const iconClasses = computed(() => ['compose-icon', iconSizeClass.value]);

  const buildSvgAttributes = (
    svgAttributes?: SVGAttributes,
  ): SVGAttributes & { style: Record<string, string | undefined>; class: string[] } => {
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
