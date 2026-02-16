import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'FIcon',
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
      width: 18,
      height: 29,
      fill: 'none',
      viewBox: '0 0 18 29',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'path',
          {
            fill: 'var(--icon-fill, #fff)',
            'fill-rule': 'evenodd',
            d: 'M5.89216 16.2608V28.7863H11.4289V16.2608H15.5572L16.3428 11.0795H11.4289V7.71867C11.4289 6.29976 12.1155 4.91795 14.3163 4.91795H16.5504V0.506827C16.5504 0.506827 14.5222 0.156738 12.5844 0.156738C8.53735 0.156738 5.89216 2.63817 5.89216 7.13052V11.0795H1.39355V16.2608H5.89216Z',
            'clip-rule': 'evenodd',
          },
          [],
        ),
      ]);
  },
});
