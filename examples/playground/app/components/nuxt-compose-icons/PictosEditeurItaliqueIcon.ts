
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurItaliqueIcon',
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
        const svgAttributes = {
  "width": 82,
  "height": 82,
  "fill": "none",
  "viewBox": "0 0 82 82"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M26.3601 65.13V60.73L32.0601 59.73L43.0601 19.63L37.3601 18.63V14.23H55.6401V18.67L49.9401 19.67L38.9401 59.77L44.6401 60.77V65.17L26.3601 65.13Z"
}, [])
        ]);
      }
    });
 