
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'FlecheIcon',
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
  "width": 41,
  "height": 25,
  "fill": "none",
  "viewBox": "0 0 41 25"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_184)"
}, [h('path', {
  "fill": "var(--icon-fill, #fefefe)",
  "d": "M5.2 25L20.5 9.54791L35.8 25L40.5 20.2429L20.5 0L0.5 20.2429L5.2 25Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_184"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H40V25H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 