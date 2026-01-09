
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurEncartIcon',
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
  "stroke": "var(--icon-stroke, #000)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M67 58V62H63"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-dasharray": "8.8 8.8",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M54.1999 62H23.3999"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M19 62H15V58"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-dasharray": "6.8 6.8",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M15 51.1999V27.3999"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M15 24V20H19"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-dasharray": "8.8 8.8",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M27.8 20H58.6"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M63 20H67V24"
}, []),h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-dasharray": "6.8 6.8",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M67 30.8V54.6"
}, [])
        ]);
      }
    });
 