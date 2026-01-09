
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosModulesChronologieIcon',
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
  "width": 71,
  "height": 68,
  "fill": "none",
  "viewBox": "0 0 71 68"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_268)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M442.703 -72.5601H-45.297V238.773H442.703V-72.5601Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M64.12 37.132C64.12 52.921 51.325 65.714 35.538 65.714 22.074 65.714 10.784 56.409 7.765 43.864M6.953 37.132C6.953 21.343 19.747 8.549 35.536 8.549 48.858 8.549 60.043 17.653 63.214 29.978"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M11.907 32.18 6.953 37.132 2 32.18M59.166 42.087 64.12 37.132 69.074 42.087M35.27 38.347V17.966M35.337 38.308 46.497 43.595M35.337 8.55V1.5M29.783 1.507H40.756"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_268"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H70.074V67.214H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 