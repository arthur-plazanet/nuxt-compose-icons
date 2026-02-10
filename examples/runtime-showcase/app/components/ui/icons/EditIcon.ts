import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'EditIcon',
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
      width: 68,
      height: 67,
      fill: 'none',
      viewBox: '0 0 68 67',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_188)',
          },
          [
            h(
              'path',
              {
                fill: 'var(--icon-fill, #fefefe)',
                d: 'M51.082 38.292 23.964 11.173 11.683 23.454 38.801 50.573 51.082 38.292ZM20.611 7.821 12.79 0 .5 12.291 8.321 20.112 20.611 7.821ZM60.579 60.078 54.434 41.643 42.144 53.933 60.579 60.078Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_188',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H67V67H0z',
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
