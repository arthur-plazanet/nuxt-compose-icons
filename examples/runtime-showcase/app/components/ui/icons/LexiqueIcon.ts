import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'LexiqueIcon',
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
      width: 47,
      height: 68,
      fill: 'none',
      viewBox: '0 0 47 68',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_270)',
          },
          [
            h(
              'mask',
              {
                id: 'mask0_1_270',
                width: '47',
                height: '68',
                x: '0',
                y: '0',
                maskUnits: 'userSpaceOnUse',
                style: 'mask-type:luminance',
              },
              [
                h(
                  'path',
                  {
                    fill: 'var(--icon-fill, #fff)',
                    d: 'M46.5 0H0.5V68H46.5V0Z',
                  },
                  [],
                ),
              ],
            ),
            h(
              'g',
              {
                mask: 'url(#mask0_1_270)',
              },
              [
                h(
                  'path',
                  {
                    fill: 'var(--icon-fill, #000)',
                    d: 'M35.7666 22.9214H19.6666C19.2432 22.9214 18.8999 23.2635 18.8999 23.6854V24.4495C18.8999 24.8714 19.2432 25.2135 19.6666 25.2135H35.7666C36.19 25.2135 36.5332 24.8714 36.5332 24.4495V23.6854C36.5332 23.2635 36.19 22.9214 35.7666 22.9214Z',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    stroke: 'var(--icon-stroke, #000)',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': 'var(--icon-stroke-width, 3)',
                    d: 'M44.9668 1.52832H10.4668V48.1351H44.9668V1.52832Z',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    fill: 'var(--icon-fill, #000)',
                    d: 'M22.298 18.337H24.465L25.348 16.178H29.432L30.316 18.337H32.537L28.398 8.641H26.438L22.298 18.337ZM26.107 14.307 27.39 11.185 28.674 14.307H26.107ZM23.603 39.731H31.648V37.874H26.335L31.648 31.713V30.104H23.768V31.96H28.916L23.603 38.121V39.731Z',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    stroke: 'var(--icon-stroke, #000)',
                    'stroke-linejoin': 'round',
                    'stroke-width': 'var(--icon-stroke-width, 3)',
                    d: 'M10.4665 49.2811V1.52832H5.86654C3.74945 1.52832 2.0332 3.2387 2.0332 5.34855V52.7193',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    stroke: 'var(--icon-stroke, #000)',
                    'stroke-linejoin': 'round',
                    'stroke-width': 'var(--icon-stroke-width, 3)',
                    d: 'M21.5832 58.0674H44.9665V48.1348H6.6332C4.09269 48.1348 2.0332 50.1872 2.0332 52.719V53.4831C2.0332 56.0149 4.09269 58.0674 6.6332 58.0674H11.8082',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    fill: 'var(--icon-fill, #000)',
                    d: 'M44.2 51.9551H7.39997C6.97655 51.9551 6.6333 52.2972 6.6333 52.7191V53.4832C6.6333 53.9051 6.97655 54.2472 7.39997 54.2472H44.2C44.6234 54.2472 44.9666 53.9051 44.9666 53.4832V52.7191C44.9666 52.2972 44.6234 51.9551 44.2 51.9551Z',
                  },
                  [],
                ),
                h(
                  'path',
                  {
                    stroke: 'var(--icon-stroke, #000)',
                    'stroke-width': 'var(--icon-stroke-width, 3)',
                    d: 'M12.7666 53.4834H20.4333V65.7081L16.5999 63.1913L12.7666 65.7081V53.4834Z',
                  },
                  [],
                ),
              ],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_270',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H46V68H0z',
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
