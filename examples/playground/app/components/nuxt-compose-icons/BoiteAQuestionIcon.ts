
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'BoiteAQuestionIcon',
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
  "width": 74,
  "height": 67,
  "fill": "none",
  "viewBox": "0 0 74 67"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-width": "var(--icon-stroke-width, 2.3)",
  "d": "M34.5 35.216H39.083V40H34.5V35.216ZM34.518 23.441C46.691 21.027 39.653 9.436 31.294 18.853L27.5 15.143C40.547 1.048 55.966 19.547 39.066 27.476V31H34.518V23.441Z"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M71.5 2V48.573H32.5L13.54 65V48.573H2.5V2H71.5Z"
}, [])
        ]);
      }
    });
 