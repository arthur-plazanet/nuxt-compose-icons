import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PersonnagesClesIcon',
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
      width: 81,
      height: 70,
      fill: 'none',
      viewBox: '0 0 81 70',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M78.278 68H35.5C35.5 68 35.5 57.868 35.5 57.801 35.5 53.624 38.451 49.71 43.931 47.368 47.751 45.741 52.399 44.778 57.553 44.778 62.714 44.778 67.424 45.741 71.239 47.366 76.724 49.707 78.278 53.421 78.278 57.598 78.276 57.665 78.278 68 78.278 68ZM70.954 25.225C70.954 28.038 70.089 30.648 68.613 32.803 66.194 36.345 62.119 38.68 57.5 38.68 52.887 38.68 48.814 36.345 46.391 32.803 44.919 30.648 44.056 28.04 44.056 25.225 44.056 22.415 44.919 19.805 46.391 17.651 48.814 14.106 52.887 11.778 57.5 11.778 62.119 11.778 66.193 14.106 68.613 17.651 70.089 19.805 70.954 22.416 70.954 25.225Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M45.278 47.82C45.278 43.643 43.724 39.929 38.239 37.588 34.424 35.963 29.714 35 24.553 35 19.399 35 14.751 35.963 10.931 37.591 5.451 39.932 2.5 43.846 2.5 48.023 2.5 48.091 2.5 58.222 2.5 58.222H35.5M37.954 15.447C37.954 18.26 37.089 20.87 35.613 23.025 33.194 26.567 29.119 28.902 24.5 28.902 19.887 28.902 15.814 26.567 13.391 23.025 11.919 20.87 11.056 18.262 11.056 15.447 11.056 12.637 11.919 10.028 13.391 7.873 15.814 4.328 19.887 2 24.5 2 29.119 2 33.193 4.328 35.613 7.873 37.089 10.028 37.954 12.638 37.954 15.447Z',
          },
          [],
        ),
      ]);
  },
});
