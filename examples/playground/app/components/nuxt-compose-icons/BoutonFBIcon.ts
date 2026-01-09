
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'BoutonFBIcon',
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
  "width": 60,
  "height": 59,
  "fill": "none",
  "viewBox": "0 0 60 59"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_501)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "fill-rule": "evenodd",
  "d": "M26.8922 31.2608V43.7863H32.4289V31.2608H36.5572L37.3428 26.0795H32.4289V22.7187C32.4289 21.2998 33.1155 19.918 35.3163 19.918H37.5504V15.5068C37.5504 15.5068 35.5222 15.1567 33.5844 15.1567C29.5373 15.1567 26.8922 17.6382 26.8922 22.1305V26.0795H22.3936V31.2608H26.8922Z",
  "clip-rule": "evenodd"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M29.5506 56.6012C44.7664 56.6012 57.1012 44.2664 57.1012 29.0506C57.1012 13.8348 44.7664 1.5 29.5506 1.5C14.3348 1.5 2 13.8348 2 29.0506C2 44.2664 14.3348 56.6012 29.5506 56.6012Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_501"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H59V59H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 