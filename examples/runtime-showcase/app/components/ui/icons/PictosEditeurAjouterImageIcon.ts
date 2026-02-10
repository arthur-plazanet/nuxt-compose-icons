import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurAjouterImageIcon',
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
            d: 'M35.7399 24.3899H69.2499V69.4699H24.1699V55.7799V35.5199',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M24.17 59.1 39.25 44.02 51.75 56.52 60.75 47.52 69.25 56.02M55.75 41.03C58.788 41.03 61.25 38.568 61.25 35.53 61.25 32.493 58.788 30.03 55.75 30.03 52.712 30.03 50.25 32.493 50.25 35.53 50.25 38.568 52.712 41.03 55.75 41.03Z',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M24.25 35.53C30.6013 35.53 35.75 30.3813 35.75 24.03C35.75 17.6788 30.6013 12.53 24.25 12.53C17.8987 12.53 12.75 17.6788 12.75 24.03C12.75 30.3813 17.8987 35.53 24.25 35.53Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #fff)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M24.25 17.53V30.53M30.75 24.03H17.75',
          },
          [],
        ),
      ]);
  },
});
