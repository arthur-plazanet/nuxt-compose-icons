
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'SaveIcon',
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
  "width": 61,
  "height": 61,
  "fill": "none",
  "viewBox": "0 0 61 61"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_524)"
}, [h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M2 59H59V17.675L42.85 2H2V59Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M48 33H14V59H48V33ZM42 2H19V16H42V2Z"
}, []),
h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M42 51H20V54H42V51ZM42 45H20V48H42V45ZM37 5H34V12H37V5Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_524"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H61V61H0z"
}, [])])])
        ]);
      }
    });
 