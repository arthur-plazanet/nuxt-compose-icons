
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosCartes04Icon',
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
  "clip-path": "url(#clip0_1_197)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M62.975 31.238C62.975 58.309 32.476 93.8 32.476 93.8C32.476 93.8 0.5 58.309 0.5 31.238C0.5 13.985 14.485 0 31.738 0C48.99 0 62.975 13.985 62.975 31.238Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M26.018 17.354 25.997 23.035H18.536L18.513 17.389C18.543 15.258 20.17 13.612 22.244 13.612 24.335 13.611 26.018 15.264 26.018 17.354ZM40.923 19.056C40.923 16.965 39.361 15.37 37.271 15.37 35.197 15.37 33.849 17.059 33.822 19.19V28.266C33.822 28.266 33.822 28.375 33.822 28.411 33.822 30.503 35.307 32.218 37.398 32.218 39.49 32.218 40.969 30.463 40.969 28.371 40.969 28.278 40.923 19.148 40.923 19.056ZM48.486 21.388C48.486 19.298 46.596 17.582 44.782 17.582 42.987 17.582 40.969 19.164 40.969 21.296V28.225C40.969 28.225 40.969 28.333 40.969 28.369 40.969 30.462 42.971 32.177 44.782 32.177 46.595 32.177 48.486 30.5 48.486 28.408 48.486 28.317 48.486 21.481 48.486 21.388ZM30.012 31.323C32.88 32.676 34.862 35.594 34.862 38.974"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M29.789 23.034H18.021C15.928 23.034 14.197 24.839 14.197 26.932L14.167 26.975L14.004 35.994V36.13C14.004 40.286 17.266 44.178 21.423 44.178"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M21.863 31.383C21.863 31.383 29.85 31.393 29.898 31.393 31.924 31.316 33.582 29.253 33.582 27.209V26.916C33.582 24.824 31.879 23.034 29.789 23.034H25.998L26.019 17.388C26.05 15.257 27.865 13.721 29.94 13.721 32.033 13.721 33.823 15.481 33.823 17.571V29.338M46.781 31.512 46.806 36.451V36.587C46.806 40.743 43.993 44.147 40.379 44.147M21.425 44.179H30.064M40.657 44.147H36.011M39.972 44.147V56.518H22.205V44.179"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_197"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H62.475V93.8H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 