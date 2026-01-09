import { parseAndTransformSvg } from './parse-and-transform-svg';

/**
 * Creates a Vue component code string from the provided SVG content.
 *
 * @param name - Name of the component to be generated
 * @param svgContent - SVG content as a string
 * @returns Literal string containing the Vue component code
 */
export function createSvgComponentCode(name: string, svgContent: string) {
  const { attributes, children } = parseAndTransformSvg(svgContent);

  return `
    import { defineComponent, h } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: '${name}',
      props: {
        color: String,
        stroke: String,
        strokeWidth: [String, Number],
        fill: String,
        size: {
          type: String,
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
