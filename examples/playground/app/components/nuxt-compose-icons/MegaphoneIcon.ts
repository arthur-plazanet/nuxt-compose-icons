
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'MegaphoneIcon',
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
  "width": 58,
  "height": 62,
  "fill": "none",
  "viewBox": "0 0 58 62"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_176)"
}, [h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M10.595 23.176 1.501 25.435 5.517 41.603 14.612 39.343 10.595 23.176ZM32.674 38.604 34.31 45.175 26.729 47.06"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M26.437 57.861L17.236 60.147L17.981 41.722L27.184 39.435L26.437 57.861Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M32.8363 13.3508L9.59184 19.1301L15.371 42.3736L38.6154 36.5942L32.8363 13.3508Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M55.962 41.642L38.724 37.046L32.901 13.63L45.982 1.5L55.962 41.642Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_176"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H57.462V61.647H0z"
}, [])])])
        ]);
      }
    });
 