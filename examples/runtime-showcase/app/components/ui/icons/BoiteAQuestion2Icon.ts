import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'BoiteAQuestion2Icon',
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
      width: 56,
      height: 51,
      fill: 'none',
      viewBox: '0 0 56 51',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_272)',
          },
          [
            h(
              'path',
              {
                fill: 'var(--icon-fill, #c1272d)',
                d: 'M26.372 26.78H29.791V30.349H26.372V26.78ZM26.386 17.996C35.467 16.196 30.217 7.548 23.981 14.574L21.15 11.806C30.884 1.29 42.387 15.091 29.779 21.007V23.635H26.386V17.996Z',
              },
              [],
            ),
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #c1272d)',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M53.9762 2V36.745H24.881L10.7362 49V36.745H2.5V2H53.9762Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_272',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H55V51H0z',
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
