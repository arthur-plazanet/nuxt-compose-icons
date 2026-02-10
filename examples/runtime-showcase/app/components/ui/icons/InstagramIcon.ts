import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'InstagramIcon',
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
      width: 50,
      height: 49,
      fill: 'none',
      viewBox: '0 0 50 49',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_179)',
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
                d: 'M48 1.5H2V47.5H48V1.5Z',
              },
              [],
            ),
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #000)',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M25.25 35.5C31.3251 35.5 36.25 30.5751 36.25 24.5C36.25 18.4249 31.3251 13.5 25.25 13.5C19.1749 13.5 14.25 18.4249 14.25 24.5C14.25 30.5751 19.1749 35.5 25.25 35.5Z',
              },
              [],
            ),
            h(
              'path',
              {
                fill: 'var(--icon-fill, #000)',
                d: 'M39.125 13.5C40.5747 13.5 41.75 12.3247 41.75 10.875C41.75 9.42525 40.5747 8.25 39.125 8.25C37.6753 8.25 36.5 9.42525 36.5 10.875C36.5 12.3247 37.6753 13.5 39.125 13.5Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_179',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H49V49H0z',
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
