
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurCouleurNoirIcon',
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
          h('g', {
  "clip-path": "url(#clip0_1_403)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M16.6472 69.3201V64.915L20.423 64.3906L38.2181 18.4169H44.1265L61.607 64.3906L65.3478 64.915V69.3201H50.7341V64.915L54.5798 64.2507L51.2236 54.8812H30.8414L27.3802 64.2507L31.2259 64.915V69.3201H16.6472ZM32.974 49.1126H49.1259L41.6443 28.4158L41.2248 27.2621H41.015L40.5955 28.4158L32.974 49.1126Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_403"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H81V81H0z",
  "transform": "translate(0.5 0.5)"
}, [])])])
        ]);
      }
    });
 