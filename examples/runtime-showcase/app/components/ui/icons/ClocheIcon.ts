import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'ClocheIcon',
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
      width: 43,
      height: 63,
      fill: 'none',
      viewBox: '0 0 43 63',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_191)',
          },
          [
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #000)',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M40.912 45.5H2C2 45.5 6.578 39.298 6.578 24.419 6.578 24.358 6.578 24.057 6.585 23.996 6.578 23.928 6.578 23.746 6.578 23.678 6.578 15.461 13.239 8.74 21.456 8.74 29.673 8.74 36.334 15.371 36.334 23.589 36.334 23.657 36.334 23.712 36.327 23.78 36.334 23.833 36.334 24.366 36.334 24.427 36.334 38.924 40.912 45.5 40.912 45.5ZM27.655 5.066C27.655 6.962 26.118 8.5 24.221 8.5H18.088C16.192 8.5 14.654 6.963 14.654 5.066V4.934C14.654 3.038 16.191 1.5 18.088 1.5H24.221C26.117 1.5 27.655 3.037 27.655 4.934V5.066ZM21.655 45.5V50.834M21.864 60.562C24.55 60.562 26.728 58.384 26.728 55.698 26.728 53.012 24.55 50.834 21.864 50.834 19.178 50.834 17 53.012 17 55.698 17 58.384 19.178 60.562 21.864 60.562Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_191',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H41.912V62.063H0z',
                  transform: 'translate(0.5)',
                },
                [],
              ),
            ],
          ),
        ]),
      ]);
  },
});
