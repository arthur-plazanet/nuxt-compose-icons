import { parseAndTransformSvg } from './parse-and-transform-svg';

export function createSvgComponentCode(name: string, svgContent: string) {
  const { attributes, children } = parseAndTransformSvg(svgContent);

  return `
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: '${name}',
  props: {
    color: String,
    stroke: String,
    strokeWidth: [String, Number],
    fill: String,
    size: { type: String, default: 'md' }
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
