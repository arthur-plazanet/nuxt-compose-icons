
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'BrouillonIcon',
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
  "width": 51,
  "height": 61,
  "fill": "none",
  "viewBox": "0 0 51 61"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M37.8023 2H2.5V5L6.88095 13.5L2.5 22L6.88095 30.5L2.5 39.5L6.88095 47.5L2.5 56V59H48.5C48.5 40.2548 48.5 31.7452 48.5 13M37.8023 2L48.5 13M37.8023 2V13H48.5"
}, []),h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M39.5 21H16.5V24H39.5V21ZM39.5 28H16.5V31H39.5V28ZM39.5 35H16.5V38H39.5V35ZM39.5 42H16.5V45H39.5V42Z"
}, [])
        ]);
      }
    });
 