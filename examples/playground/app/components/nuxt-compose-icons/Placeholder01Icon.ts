
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'Placeholder01Icon',
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
  "width": 300,
  "height": 301,
  "fill": "none",
  "viewBox": "0 0 300 301"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('path', {
  "stroke": "var(--icon-stroke, #c1272d)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 8)",
  "d": "M198 83.36V121.59C198 138.51 188.83 153.56 176.11 163.18C167.009 170.06 157.355 174.16 148.875 174.16C139.945 174.16 128.697 170.099 119.687 163.269C107.018 153.65 96 138.56 96 121.59V83.36C96 54.33 117.9 30.79 147 30.79C176.1 30.79 198 54.33 198 83.36Z"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #c1272d)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 8)",
  "d": "M237 236.45V282.5H59V233.59C59 198.18 85.54 166.441 120 163.27C129.01 170.1 139.945 174.161 148.875 174.161C157.355 174.161 166.697 170.06 175.798 163.181C210.957 165.94 237 200.63 237 236.45Z"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #c1272d)",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 8)",
  "d": "M147 95.5V136.5L133 130.5M179.325 95.388C179.325 87.68 173.077 81.5 165.369 81.5H161.022C153.314 81.5 147.066 87.714 147.066 95.421"
}, [])
        ]);
      }
    });
 