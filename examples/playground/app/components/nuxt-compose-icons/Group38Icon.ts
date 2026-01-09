
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'Group38Icon',
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
  "clip-path": "url(#clip0_1_182)"
}, [h('path', {
  "fill": "var(--icon-fill, #c1272d)",
  "d": "M67.5 0H0.5V67H67.5V0Z"
}, []),
h('path', {
  "fill": "var(--icon-fill, #fefefe)",
  "d": "M19.2 46L34.5 30.5479L49.8 46L54.5 41.2429L34.5 21L14.5 41.2429L19.2 46Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_182"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H67V67H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 