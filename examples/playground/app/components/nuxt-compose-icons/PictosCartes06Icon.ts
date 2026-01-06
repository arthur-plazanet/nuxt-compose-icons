
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosCartes06Icon',
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
  "width": 63,
  "height": 94,
  "fill": "none",
  "viewBox": "0 0 63 94"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_195)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M62.975 31.238C62.975 58.309 32.477 93.8 32.477 93.8C32.477 93.8 0.5 58.309 0.5 31.238C0.5 13.985 14.485 0 31.737 0C48.99 0 62.975 13.985 62.975 31.238Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M15.957 28.646 8.464 30.507 11.773 43.824 19.265 41.963 15.957 28.646ZM34.143 41.355 35.49 46.769 29.245 48.321"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M29.004 57.219L21.425 59.102L22.039 43.924L29.619 42.039L29.004 57.219Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M34.2757 20.5536L15.1287 25.3142L19.8891 44.4602L39.0361 39.6996L34.2757 20.5536Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M53.326 43.857L39.126 40.071L34.329 20.783L45.105 10.791L53.326 43.857Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_195"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H62.475V93.8H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 