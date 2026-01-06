
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'ImportIcon',
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
  "height": 37,
  "fill": "none",
  "viewBox": "0 0 53 37"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M18.5 17.601 26.58 25.691M34.93 17.341 26.58 25.691M26.5 25.602V2"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M43.78 21.6304H50.5V34.6304H2.5V21.6304H9.22"
}, [])
        ]);
      }
    });
 