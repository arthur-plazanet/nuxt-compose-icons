
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurCitationIcon',
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
  "height": 82,
  "fill": "none",
  "viewBox": "0 0 82 82"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M17.77 25.98H22.14V37.44H10.61V27.77C10.61 23.05 11.757 19.66 14.05 17.6 16.343 15.54 19.613 14.467 23.86 14.38L24.79 18.89C19.73 19.423 17.39 21.787 17.77 25.98ZM35.96 25.98H40.33V37.44H28.8V27.77C28.8 23.05 29.947 19.66 32.24 17.6 34.533 15.54 37.8 14.467 42.04 14.38L42.98 18.89C37.92 19.423 35.58 21.787 35.96 25.98ZM46.04 56.02H41.67V44.56H53.2V54.23C53.2 58.95 52.06 62.36 49.76 64.43 47.46 66.5 44.2 67.57 39.96 67.62L39.02 63.11C44.08 62.583 46.42 60.22 46.04 56.02ZM64.23 56.02H59.86V44.56H71.39V54.23C71.39 58.95 70.24 62.36 67.95 64.43 65.66 66.5 62.39 67.57 58.14 67.62L57.21 63.11C62.27 62.583 64.61 60.22 64.23 56.02Z"
}, [])
        ]);
      }
    });
 