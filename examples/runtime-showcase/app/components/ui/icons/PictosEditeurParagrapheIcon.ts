import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurParagrapheIcon',
  props: {
    color: String,
    stroke: String,
    strokeWidth: [String, Number],
    fill: String,
    size: {
      type: String,
      default: 'md',
    },
  },
  setup(props) {
    const { buildSvgAttributes } = useComposeIcon(props);
    const svgAttributes = {
      width: 82,
      height: 82,
      fill: 'none',
      viewBox: '0 0 82 82',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M58.69 17.5H30.6C28.784 17.43 26.972 17.728 25.273 18.374 23.574 19.021 22.023 20.005 20.713 21.265 19.403 22.526 18.361 24.037 17.649 25.71 16.937 27.383 16.57 29.182 16.57 31 16.57 32.818 16.937 34.617 17.649 36.29 18.361 37.963 19.403 39.475 20.713 40.735 22.023 41.996 23.574 42.979 25.273 43.626 26.972 44.273 28.784 44.57 30.6 44.5H39.5M39.54 68.35V17.5M49.03 68.35V17.5',
          },
          [],
        ),
      ]);
  },
});
