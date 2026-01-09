
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurCouleurBlancIcon',
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
  "width": 81,
  "height": 81,
  "fill": "none",
  "viewBox": "0 0 81 81"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_404)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M80.5 0.5H0.5V80.5H80.5V0.5Z"
}, []),
h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M16.1472 68.8201V64.415L19.923 63.8906L37.7181 17.9169H43.6265L61.107 63.8906L64.8478 64.415V68.8201H50.2341V64.415L54.0798 63.7507L50.7236 54.3812H30.3414L26.8802 63.7507L30.7259 64.415V68.8201H16.1472ZM32.474 48.6126H48.6259L41.1443 27.9158L40.7248 26.7621H40.515L40.0955 27.9158L32.474 48.6126Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_404"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H80V80H0z",
  "transform": "translate(0.5 0.5)"
}, [])])])
        ]);
      }
    });
 