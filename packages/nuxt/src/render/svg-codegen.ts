import { parseAndTransformSvg } from './parse-and-transform-svg';

/**
 * @param name - Name of the component to be generated
 * @param svgContent - SVG content as a string
 * @returns Literal string containing the Vue component code
 */
export function createSvgComponentCode(name: string, svgContent: string) {
  const { attributes, children } = parseAndTransformSvg(svgContent);

  return `
import { defineComponent, h, type PropType } from 'vue';
// import { useComposeIcon } from 'nuxt-compose-icons';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons';

export default defineComponent({
  name: '${name}',
  props: {
    color: String,
    stroke: String,
    strokeWidth: [String, Number],
    fill: String,
    size: {
      type: String as PropType<IconSizeKeyValue>,
      default: 'md'
    }
  },
  setup(props) {
    const { buildSvgAttributes } = useComposeIcon(props);
    const svgAttributes = ${JSON.stringify(attributes, null, 2)};

    return () => h('svg', buildSvgAttributes(svgAttributes), [
      ${children}
    ]);
  }
});
  `;
}
