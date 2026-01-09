
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurSurlignageRougeIcon',
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
  "stroke": "var(--icon-stroke, #c1272d)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M59.7205 11.9947L46.9924 53.0364L62.8666 57.9594L75.5947 16.9177L59.7205 11.9947Z"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #c1272d)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M48.574 53.526 46.115 61.453 58.856 65.405 61.315 57.477 48.574 53.526ZM63.673 6.837 61.866 12.663 73.461 16.259 75.268 10.433 63.673 6.837ZM48.692 62.253 46.61 68.968 54.184 71.317 56.266 64.602 48.692 62.253ZM44.52 75.69H52.83L54.18 71.32 46.61 68.97 44.52 75.69ZM8.27 75.69H52.83"
}, [])
        ]);
      }
    });
 