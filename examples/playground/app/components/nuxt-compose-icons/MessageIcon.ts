
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'MessageIcon',
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
  "width": 53,
  "height": 52,
  "fill": "none",
  "viewBox": "0 0 53 52"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_175)"
}, [h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M51.5 1.5V33.5H25.855L9.5 49.586V33.5H1.5V1.5H51.5Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M11 9.5H43M11 17.5H43M11 24.5H31"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_175"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H53V51.086H0z"
}, [])])])
        ]);
      }
    });
 