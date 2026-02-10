import { defineComponent, h } from 'vue';

// TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
import { useComposeIcon } from '#imports';
// import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

export default defineComponent({
  name: 'LinkIcon',
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
      width: 48,
      height: 47,
      fill: 'none',
      viewBox: '0 0 48 47',
    };

    return () =>
      h('svg', buildSvgAttributes(svgAttributes), [
        h(
          'path',
          {
            stroke: 'var(--icon-stroke, #000)',
            'stroke-linecap': 'round',
            'stroke-width': 'var(--icon-stroke-width, 3)',
            d: 'M11.278 23.506 4.207 30.577C3.817 30.968 3.817 31.601 4.207 31.991L16.228 44.012C16.619 44.403 17.252 44.403 17.642 44.012L24.713 36.941M37.441 24.213 44.513 17.142C44.903 16.752 44.903 16.118 44.513 15.728L32.492 3.707C32.101 3.317 31.468 3.317 31.077 3.707L24.006 10.778',
          },
          [],
        ),
        h(
          'path',
          {
            fill: 'var(--icon-fill, #000)',
            d: 'M32.4913 16.435L31.7842 15.7279C31.3937 15.3374 30.7605 15.3374 30.37 15.7279L16.2279 29.87C15.8373 30.2606 15.8373 30.8937 16.2279 31.2843L16.935 31.9914C17.3255 32.3819 17.9587 32.3819 18.3492 31.9914L32.4913 17.8492C32.8818 17.4587 32.8818 16.8255 32.4913 16.435Z',
          },
          [],
        ),
      ]);
  },
});
