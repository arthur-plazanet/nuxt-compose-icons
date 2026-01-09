
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'BoutonTwitterIcon',
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
  "clip-path": "url(#clip0_1_499)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M24.1404 42.1027C36.2121 42.1027 42.8166 32.3829 42.8166 23.9565C42.8166 23.6832 42.8104 23.4039 42.7979 23.1306C44.0827 22.2279 45.1914 21.1097 46.072 19.8286C44.8755 20.3458 43.605 20.6836 42.3042 20.8305C43.6739 20.0327 44.6995 18.7795 45.1908 17.3031C43.9022 18.0451 42.493 18.5685 41.0236 18.8509C40.0336 17.8288 38.7245 17.152 37.2989 16.9252C35.8732 16.6984 34.4104 16.9343 33.1366 17.5963C31.8627 18.2583 30.8488 19.3096 30.2516 20.5877C29.6543 21.8657 29.5071 23.2994 29.8325 24.6669C27.2233 24.5397 24.6707 23.8811 22.3403 22.7339C20.0098 21.5867 17.9535 19.9764 16.3047 18.0075C15.4667 19.4114 15.2102 21.0726 15.5875 22.6536C15.9648 24.2346 16.9474 25.6166 18.3358 26.5189C17.2935 26.4868 16.274 26.2141 15.3616 25.7235V25.8024C15.3607 27.2757 15.8849 28.7038 16.8451 29.844C17.8053 30.9842 19.1423 31.7661 20.6288 32.0568C19.6632 32.3135 18.6499 32.3509 17.6671 32.1661C18.0865 33.4331 18.9027 34.5413 20.0015 35.336C21.1004 36.1306 22.4271 36.5721 23.7967 36.5989C21.4716 38.3734 18.5995 39.3359 15.6429 39.3314C15.1185 39.3306 14.5947 39.2994 14.0742 39.2378C17.0778 41.1101 20.5718 42.1045 24.1404 42.1027Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #fff)",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M29.6522 56.6012C44.8679 56.6012 57.2028 44.2664 57.2028 29.0506C57.2028 13.8348 44.8679 1.5 29.6522 1.5C14.4364 1.5 2.10156 13.8348 2.10156 29.0506C2.10156 44.2664 14.4364 56.6012 29.6522 56.6012Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_499"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H59V59H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 