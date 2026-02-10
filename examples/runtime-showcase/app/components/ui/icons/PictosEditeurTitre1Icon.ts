import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurTitre1Icon',
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
            'clip-path': 'url(#clip0_1_391)',
          },
          [
            h(
              'path',
              {
                fill: 'var(--icon-fill, #000)',
                d: 'M20.633 72.07V67.665L26.331 66.686V26.376H14.794L13.781 33.438H8.606V21.167H50.909V33.438H45.805L44.756 26.376H33.219V66.686L38.917 67.665V72.07H20.633ZM61.404 47.302V44.747L65.966 44.179V22.057L61.322 22.138V19.644L69.961 17.778V44.179L74.503 44.747V47.302H61.404Z',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_391',
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
