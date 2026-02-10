import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurPucesIcon',
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
            d: 'M28.4199 23H69.7499',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M17.75 28.5C20.7876 28.5 23.25 26.0376 23.25 23C23.25 19.9624 20.7876 17.5 17.75 17.5C14.7124 17.5 12.25 19.9624 12.25 23C12.25 26.0376 14.7124 28.5 17.75 28.5Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M28.4199 41H69.7499',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M17.75 46.5C20.7876 46.5 23.25 44.0376 23.25 41C23.25 37.9624 20.7876 35.5 17.75 35.5C14.7124 35.5 12.25 37.9624 12.25 41C12.25 44.0376 14.7124 46.5 17.75 46.5Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M28.4199 59H69.7499',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M17.75 64.5C20.7876 64.5 23.25 62.0376 23.25 59C23.25 55.9624 20.7876 53.5 17.75 53.5C14.7124 53.5 12.25 55.9624 12.25 59C12.25 62.0376 14.7124 64.5 17.75 64.5Z',
          },
          [],
        ),
      ]);
  },
});
