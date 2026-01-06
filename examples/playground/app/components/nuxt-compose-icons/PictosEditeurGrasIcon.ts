
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurGrasIcon',
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
  "clip-path": "url(#clip0_1_399)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M19.4678 69.3201V63.2019L24.8868 62.1531V25.6189L19.4678 24.5701V18.4169H24.8868H42.0875C48.0775 18.4169 52.7506 19.5823 56.1069 21.913C59.4631 24.2438 61.1413 27.7282 61.1413 32.3664C61.1413 34.7204 60.512 36.8297 59.2534 38.6943C58.0181 40.5356 56.2118 41.9223 53.8344 42.8546C55.8622 43.2975 57.5519 44.0783 58.9038 45.197C60.2789 46.3158 61.3044 47.6792 61.9803 49.2875C62.6562 50.8723 62.9942 52.6087 62.9942 54.4966C62.9942 59.3679 61.386 63.0621 58.1696 65.5792C54.9532 68.0731 50.3966 69.3201 44.4999 69.3201H19.4678ZM35.0954 61.4888H44.4999C47.2035 61.4888 49.2662 60.9061 50.6879 59.7408C52.1097 58.5521 52.8206 56.8041 52.8206 54.4966C52.8206 52.0028 52.2146 50.1032 51.0026 48.798C49.7906 47.4695 47.8794 46.8052 45.269 46.8052H35.0954V61.4888ZM35.0954 39.7431H42.4372C45.1641 39.7431 47.2618 39.1837 48.7301 38.065C50.1985 36.9462 50.9327 35.3147 50.9327 33.1705C50.9327 30.8164 50.1868 29.08 48.6952 27.9613C47.2268 26.8425 45.0243 26.2832 42.0875 26.2832H35.0954V39.7431Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_399"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H81V81H0z",
  "transform": "translate(0.5 0.5)"
}, [])])])
        ]);
      }
    });
 