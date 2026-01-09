
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'Group37Icon',
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
  "width": 68,
  "height": 67,
  "fill": "none",
  "viewBox": "0 0 68 67"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_183)"
}, [h('path', {
  "fill": "var(--icon-fill, #c1272d)",
  "d": "M67.5 0H0.5V67H67.5V0Z"
}, []),
h('path', {
  "fill": "var(--icon-fill, #fefefe)",
  "d": "M19.2 21L34.5 36.4521L49.8 21L54.5 25.7571L34.5 46L14.5 25.7571L19.2 21Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_183"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H67V67H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 