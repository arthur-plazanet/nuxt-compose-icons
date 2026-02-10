import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'PictosEditeurAjouterLienIcon',
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
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M49.7 46.0599C48.6281 48.1893 46.7552 49.8063 44.4923 50.5563C42.2294 51.3062 39.7614 51.1277 37.63 50.0599L25.1 43.8499C22.9706 42.778 21.3536 40.9051 20.6036 38.6422C19.8537 36.3793 20.0322 33.9113 21.1 31.7799C22.1719 29.6506 24.0448 28.0335 26.3077 27.2836C28.5706 26.5337 31.0386 26.7122 33.17 27.7799L45.7 34.0299C47.3516 34.8546 48.7096 36.1673 49.59 37.7899',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M42.55 46.9601C43.6219 44.8308 45.4949 43.2137 47.7578 42.4638C50.0207 41.7138 52.4886 41.8923 54.62 42.9601L67.1501 49.2101C69.2794 50.282 70.8965 52.1549 71.6464 54.4178C72.3963 56.6807 72.2178 59.1487 71.1501 61.2801C70.0782 63.4094 68.2052 65.0265 65.9423 65.7764C63.6795 66.5264 61.2115 66.3479 59.0801 65.2801L46.5801 59.0301C44.8609 58.1862 43.4585 56.8119 42.5801 55.1101',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            stroke: 'var(--icon-stroke, #000)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M21.25 34.53C27.6013 34.53 32.75 29.3813 32.75 23.03C32.75 16.6788 27.6013 11.53 21.25 11.53C14.8987 11.53 9.75 16.6788 9.75 23.03C9.75 29.3813 14.8987 34.53 21.25 34.53Z',
          },
          [],
        ),
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #fff)',
            'stroke-miterlimit': '10',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M21.25 16.53V29.53M27.75 23.03H14.75',
          },
          [],
        ),
      ]);
  },
});
