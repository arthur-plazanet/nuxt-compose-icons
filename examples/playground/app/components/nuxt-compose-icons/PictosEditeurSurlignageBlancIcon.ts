
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurSurlignageBlancIcon',
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
  "width": 81,
  "height": 81,
  "fill": "none",
  "viewBox": "0 0 81 81"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_394)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M80.5 0.5H0.5V80.5H80.5V0.5Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M59.2249 11.4942L46.4968 52.5359L62.371 57.4589L75.099 16.4172L59.2249 11.4942Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M48.078 53.025 45.619 60.953 58.361 64.904 60.819 56.977 48.078 53.025ZM63.167 6.336 61.36 12.162 72.956 15.758 74.762 9.932 63.167 6.336ZM48.186 61.753 46.104 68.467 53.678 70.816 55.76 64.102 48.186 61.753ZM44.02 75.19H52.33L53.68 70.82 46.11 68.47 44.02 75.19ZM7.77 75.19H52.33"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_394"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H80V80H0z",
  "transform": "translate(0.5 0.5)"
}, [])])])
        ]);
      }
    });
 