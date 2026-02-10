import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosModulesAnonymeIcon',
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
      width: 83,
      height: 65,
      fill: 'none',
      viewBox: '0 0 83 65',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_476)',
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
                d: 'M23.875 62.75C30.917 62.75 36.625 57.042 36.625 50 36.625 42.958 30.917 37.25 23.875 37.25 16.833 37.25 11.125 42.958 11.125 50 11.125 57.042 16.833 62.75 23.875 62.75ZM58.375 62.75C65.417 62.75 71.125 57.042 71.125 50 71.125 42.958 65.417 37.25 58.375 37.25 51.333 37.25 45.625 42.958 45.625 50 45.625 57.042 51.333 62.75 58.375 62.75ZM36.625 50H45.625M1.5 32H80.75M18.132 32V2L41.125 10.136 64.118 2V32M18.133 22.75H64.118',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_476',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H82.25V63.75H0z',
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
