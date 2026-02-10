import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosModulesValiderIcon',
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
      width: 61,
      height: 61,
      fill: 'none',
      viewBox: '0 0 61 61',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_474)',
          },
          [
            h(
              'path',
              {
                fill: 'var(--icon-fill, #fff)',
                d: 'M259.165 -75.585H-228.835V235.748H259.165V-75.585Z',
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
                d: 'M13.4659 29.557L25.3719 41.463L57.752 9.08301',
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
                d: 'M56.825 19.759C58.227 23.145 59.001 26.857 59.001 30.75C59.001 46.628 46.129 59.5 30.251 59.5C14.373 59.5 1.50098 46.628 1.50098 30.75C1.50098 14.872 14.373 2 30.251 2C37.359 2 43.863 4.579 48.882 8.853',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_474',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H60.5V60.5H0z',
                  transform: 'translate(0 0.5)',
                },
                [],
              ),
            ],
          ),
        ]),
      ]);
  },
});
