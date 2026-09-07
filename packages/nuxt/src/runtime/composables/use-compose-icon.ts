import type { ClassValue, ComputedRef, StyleValue, SVGAttributes } from 'vue';
import { computed } from 'vue';
import type { ComposeIconProps } from '../types';
import { getIconSizeClass } from '../utils';
import { isRawCssSize } from '../utils/icon-sizing';
import { useComposeIconTheme } from './use-compose-icon-theme';

export { useComposeIcon };
export type { UseComposeIcon };

interface UseComposeIcon {
  iconStyles: ComputedRef<StyleValue>;
  iconClasses: ComputedRef<ClassValue[]>;
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
  // Generated components already bake a real default into their `size` prop via codegen, so
  // this mainly matters for calling useComposeIcon by hand.
  const { defaultSizeKey } = useComposeIconTheme();
  const size = computed<string>(() => props.size ?? defaultSizeKey);

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
    // Returned as computed refs, not `.value` snapshots — the docs show these bound
    // directly in a template (`:style="iconStyles"`), which only stays reactive to prop
    // changes if the ref itself crosses the composable boundary. `buildSvgAttributes` was
    // never affected: it's a closure that reads `.value` fresh on every call.
    iconStyles,
    iconClasses,
    buildSvgAttributes,
  };
}
