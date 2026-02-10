import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'AjouterIcon',
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
      width: 39,
      height: 39,
      fill: 'none',
      viewBox: '0 0 39 39',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_194)',
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
                d: 'M19.564 36.627C29.264 36.627 37.128 28.763 37.128 19.063 37.128 9.363 29.264 1.499 19.564 1.499 9.864 1.499 2 9.363 2 19.063 2 28.763 9.864 36.627 19.564 36.627ZM19.563 7.631V30.496M7.763 19.063H31.364',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_194',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H38.127V38.127H0z',
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
