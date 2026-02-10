import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'ArticleIcon',
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
      width: 62,
      height: 61,
      fill: 'none',
      viewBox: '0 0 62 61',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M53.4264 8.9707H31.897V11.6619H53.4264V8.9707Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-width': 'var(--icon-stroke-width, 1.34559)',
            d: 'M52.7536 17.7173H32.5698V19.0629H52.7536V17.7173Z',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M53.426 25.118H31.897V27.809H53.426V25.118ZM53.426 33.191H8.573V35.883H53.426V33.191ZM53.426 41.265H8.573V43.956H53.426V41.265ZM39.97 49.338H8.573V52.03H39.97V49.338Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M25.0144 10.4707H10.0732V26.3089H25.0144V10.4707Z',
          },
          [],
        ),
      ]);
  },
});
