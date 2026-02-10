import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurTitre2Icon',
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
          'g',
          {
            'clip-path': 'url(#clip0_1_390)',
          },
          [
            h(
              'path',
              {
                fill: 'var(--icon-fill, #000)',
                d: 'M19.703 71.6V67.195L25.402 66.216V25.906H13.864L12.851 32.968H7.676V20.697H49.979V32.968H44.875L43.826 25.906H32.289V66.216L37.988 67.195V71.6H19.703ZM55.447 46.832V44.095L65.119 33.348C66.282 32.05 67.181 30.948 67.816 30.042 68.465 29.137 68.918 28.312 69.175 27.569 69.432 26.812 69.56 26.041 69.56 25.257 69.56 23.784 69.114 22.547 68.222 21.546 67.329 20.532 66.052 20.025 64.389 20.025 62.659 20.025 61.307 20.546 60.334 21.587 59.374 22.628 58.894 24.101 58.894 26.007H55.062L55.021 25.886C54.981 24.182 55.339 22.655 56.096 21.303 56.853 19.938 57.948 18.863 59.381 18.079 60.827 17.281 62.544 16.882 64.531 16.882 66.397 16.882 67.999 17.241 69.337 17.957 70.689 18.66 71.73 19.627 72.46 20.857 73.19 22.087 73.555 23.5 73.555 25.095 73.555 26.176 73.338 27.251 72.906 28.319 72.487 29.387 71.872 30.482 71.06 31.604 70.249 32.726 69.263 33.909 68.1 35.152L60.334 43.608 60.374 43.709H70.858L71.182 40.323H74.568V46.832H55.447Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_390',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H81V81H0z',
                  transform: 'translate(0.5 0.5)',
                },
                [],
              ),
            ],
          ),
        ]),
      ]);
  },
});
