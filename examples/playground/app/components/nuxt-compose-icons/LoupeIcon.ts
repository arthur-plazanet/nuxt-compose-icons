
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'LoupeIcon',
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
  "width": 46,
  "height": 46,
  "fill": "none",
  "viewBox": "0 0 46 46"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_177)"
}, [h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M39.479 26.346C34.889 30.936 27.987 31.822 22.521 28.985C21.214 28.322 19.99 27.436 18.896 26.346C17.806 25.253 16.918 24.028 16.257 22.721C13.421 17.253 14.306 10.352 18.896 5.76301C24.579 0.0800128 33.796 0.0800128 39.479 5.76301C45.162 11.446 45.162 20.663 39.479 26.346Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M22.521 28.985L9.05399 42.454C7.32499 44.181 4.51499 44.181 2.78799 42.454C1.92899 41.595 1.49199 40.457 1.49999 39.321C1.49199 38.185 1.92899 37.048 2.78799 36.188L16.257 22.721C16.918 24.028 17.806 25.252 18.896 26.346C19.989 27.436 21.214 28.322 22.521 28.985Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_177"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H45.241V45.249H0z"
}, [])])])
        ]);
      }
    });
 