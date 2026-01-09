
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'ProfilIcon',
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
  "width": 35,
  "height": 47,
  "fill": "none",
  "viewBox": "0 0 35 47"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_471)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M35 46.5H0C0 46.5 0 38.211 0 38.156 0 34.738 2.414 31.535 6.898 29.62 10.023 28.288 13.827 27.5 18.044 27.5 22.266 27.5 26.12 28.288 29.241 29.618 33.729 31.533 35 34.571 35 37.989 34.999 38.044 35 46.5 35 46.5ZM29.008 11.502C29.008 13.804 28.3 15.939 27.092 17.702 25.113 20.6 21.779 22.511 18 22.511 14.226 22.511 10.893 20.6 8.911 17.702 7.706 15.939 7 13.805 7 11.502 7 9.203 7.706 7.068 8.911 5.305 10.893 2.405 14.226.5 18 .5 21.779.5 25.112 2.405 27.092 5.305 28.3 7.068 29.008 9.204 29.008 11.502Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_471"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H35V46H0z",
  "transform": "translate(0 0.5)"
}, [])])])
        ]);
      }
    });
 