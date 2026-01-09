
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'EnveloppeIcon',
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
  "height": 50,
  "fill": "none",
  "viewBox": "0 0 82 50"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_187)"
}, [h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M80 1.5H2V47.5H80V1.5Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M2 1.711 41 31.211 80 1.711M33.066 25.211 2 47.711M49.593 24.711 80 47.711"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_187"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H81V49.211H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 