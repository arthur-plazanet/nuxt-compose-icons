
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosModulesMettreEnAvantIcon',
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
  "height": 73,
  "fill": "none",
  "viewBox": "0 0 71 73"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_475)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M188.167 -59.0779H-299.833V252.255H188.167V-59.0779Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M40.234 48.193 56.109 53.116 68.835 12.08 52.96 7.157 40.234 48.193ZM39.348 56.623 52.085 60.572 54.541 52.647 41.805 48.699 39.348 56.623Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M55.101 7.822 66.695 11.418 68.501 5.595 56.907 2 55.101 7.822ZM39.837 64.111 47.415 66.462 49.498 59.746 41.92 57.395 39.837 64.111ZM37.75 70.841 46.054 70.847 47.411 66.475 39.832 64.124 37.75 70.841ZM1.5 70.841H46.054"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_475"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H70.325V71.847H0z",
  "transform": "translate(0 0.5)"
}, [])])])
        ]);
      }
    });
 