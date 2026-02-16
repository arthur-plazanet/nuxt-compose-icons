import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PoingIcon',
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
      width: 53,
      height: 67,
      fill: 'none',
      viewBox: '0 0 53 67',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'g',
          {
            'clip-path': 'url(#clip0_1_472)',
          },
          [
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #000)',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M19.079 7.477 19.049 15.79H8.131L8.098 7.527C8.142 4.408 10.522 2 13.559 2 16.617 2 19.079 4.418 19.079 7.477ZM40.892 9.968C40.892 6.906 38.608 4.574 35.547 4.574 32.513 4.574 30.539 7.045 30.5 10.164V23.445C30.5 23.445 30.5 23.604 30.5 23.656 30.5 26.719 32.674 29.227 35.734 29.227 38.794 29.227 40.958 26.659 40.958 23.597 40.958 23.464 40.892 10.103 40.892 9.968ZM51.958 13.381C51.958 10.322 49.192 7.812 46.538 7.812 43.911 7.812 40.958 10.127 40.958 13.248V23.388C40.958 23.388 40.958 23.547 40.958 23.599 40.958 26.662 43.888 29.17 46.538 29.17 49.192 29.17 51.958 26.717 51.958 23.655 51.958 23.521 51.958 13.517 51.958 13.381ZM24.924 27.918C29.12 29.898 32.022 34.169 32.022 39.115',
              },
              [],
            ),
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #000)',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M24.597 15.7889H7.377C4.314 15.7889 1.781 18.4319 1.781 21.4939L1.738 21.5579L1.5 34.7569V34.9549C1.5 41.0379 6.273 46.7329 12.357 46.7329',
              },
              [],
            ),
            h(
              'path',
              {
                stroke: 'var(--icon-stroke, #000)',
                'stroke-miterlimit': '10',
                'stroke-width': 'var(--icon-stroke-width, 3)',
                d: 'M13 28.008C13 28.008 24.688 28.023 24.758 28.023 27.723 27.912 30.149 24.891 30.149 21.901V21.471C30.149 18.408 27.657 15.789 24.597 15.789H19.049L19.079 7.527C19.125 4.408 21.781 2.162 24.818 2.162 27.881 2.162 30.5 4.737 30.5 7.796V25.015M49.464 28.196 49.5 35.425V35.623C49.5 41.706 45.385 46.686 40.096 46.686M12.357 46.733H25M40.502 46.686H33.703M39.5 46.686V64.789H13.5V46.733',
              },
              [],
            ),
          ],
        ),
        h('defs', {}, [
          h(
            'clipPath',
            {
              id: 'clip0_1_472',
            },
            [
              h(
                'path',
                {
                  fill: 'var(--icon-fill, #fff)',
                  d: 'M0 0H53V65.789H0z',
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
