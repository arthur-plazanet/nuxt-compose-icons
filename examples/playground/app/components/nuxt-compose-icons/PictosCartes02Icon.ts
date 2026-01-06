
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosCartes02Icon',
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
  "clip-path": "url(#clip0_1_199)"
}, [h('path', {
  "fill": "var(--icon-fill, #c1272d)",
  "d": "M62.975 31.238C62.975 58.309 32.476 93.8 32.476 93.8C32.476 93.8 0.5 58.309 0.5 31.238C0.5 13.985 14.485 0 31.737 0C48.99 0 62.975 13.985 62.975 31.238Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M22.226 41.61V49.361H10.184L10.131 41.602C10.131 41.602 10.128 41.503 10.128 41.449C10.128 36.067 14.489 31.706 19.873 31.706C22.081 31.706 24.202 32.442 25.835 33.68C23.489 35.458 22.226 38.435 22.226 41.61Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M24.513 24.594C24.513 26.083 24.969 27.463 25.748 28.603 24.47 30.477 22.314 31.712 19.873 31.712 15.943 31.712 12.756 28.525 12.756 24.594 12.756 20.665 15.944 17.48 19.873 17.48 22.314 17.48 24.47 18.712 25.748 20.587 24.969 21.727 24.513 23.107 24.513 24.594ZM40.33 49.361H22.226C22.226 49.361 22.226 41.661 22.226 41.61 22.226 38.435 23.489 35.461 25.835 33.68 27.47 32.444 29.46 31.712 31.667 31.712 33.876 31.712 35.893 32.444 37.526 33.679 39.875 35.458 40.539 38.281 40.539 41.456 40.54 41.506 40.33 49.361 40.33 49.361Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M38.742 24.594C38.742 26.083 38.284 27.463 37.504 28.603 36.223 30.477 34.068 31.712 31.626 31.712 29.185 31.712 27.03 30.477 25.748 28.603 24.969 27.463 24.513 26.083 24.513 24.594 24.513 23.108 24.969 21.727 25.748 20.587 27.03 18.712 29.185 17.48 31.626 17.48 34.068 17.48 36.224 18.712 37.504 20.587 38.284 21.727 38.742 23.107 38.742 24.594ZM52.993 49.361H40.33C40.33 49.361 40.528 41.506 40.528 41.456 40.528 38.281 39.873 35.458 37.527 33.679 39.16 32.442 40.963 31.712 43.172 31.712 48.555 31.712 53.021 36.067 53.021 41.449 53.021 41.503 52.993 49.361 52.993 49.361Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M50.497 24.594C50.497 28.525 47.311 31.712 43.381 31.712C40.942 31.712 38.785 30.477 37.505 28.603C38.285 27.463 38.743 26.083 38.743 24.594C38.743 23.108 38.285 21.727 37.505 20.587C38.785 18.712 40.942 17.48 43.381 17.48C47.311 17.479 50.497 20.665 50.497 24.594Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_199"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H62.475V93.8H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 