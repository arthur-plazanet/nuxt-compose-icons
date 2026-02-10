import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurDeroulerIcon',
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
            d: 'M71.3801 53.3201L60.9801 63.7201L50.5701 53.3201',
            opacity: '0.98',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M13.97 30.72H60.98V63.72',
            opacity: '0.98',
          },
          [],
        ),
      ]);
  },
});
