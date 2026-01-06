
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'PictosEditeurSouligneIcon',
      props: {
        color: String,
        stroke: String,
        strokeWidth: [String, Number],
        fill: String,
        size: {
          type: String,
          default: 'md'
        }
      },
      setup(props) {
        const { buildSvgAttributes } = useComposeIcon(props);
        const svgAttributes = {
  "width": 82,
  "height": 82,
  "fill": "none",
  "viewBox": "0 0 82 82"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_395)"
}, [h('path', {
  "fill": "var(--icon-fill, #000)",
  "d": "M40.6655 67.0442C37.1694 67.0442 34.0463 66.3567 31.296 64.9815C28.5457 63.6064 26.3782 61.6486 24.7933 59.1081C23.2084 56.5443 22.4159 53.4794 22.4159 49.9134V20.8259L16.7173 19.847V15.4069H35.0019V19.847L29.3032 20.8259V49.9134C29.3032 52.4539 29.781 54.5865 30.7366 56.3112C31.7155 58.036 33.0673 59.3412 34.7921 60.2269C36.5168 61.0892 38.5096 61.5204 40.7704 61.5204C43.0545 61.5204 45.0706 61.0892 46.8187 60.2269C48.59 59.3645 49.9651 58.0709 50.944 56.3462C51.9463 54.6215 52.4474 52.4772 52.4474 49.9134V20.8259L46.7487 19.847V15.4069H65.0333V19.847L59.3347 20.8259V49.9134C59.3347 53.5959 58.5539 56.7191 56.9923 59.2829C55.454 61.8234 53.2864 63.7579 50.4896 65.0864C47.6927 66.3916 44.418 67.0442 40.6655 67.0442Z"
}, []),
h('path', {
  "stroke": "var(--icon-stroke, #000)",
  "stroke-miterlimit": "10",
  "stroke-width": "var(--icon-stroke-width, 3)",
  "d": "M19.27 70.27H62.47"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_395"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H81V81H0z",
  "transform": "translate(0.5 0.5)"
}, [])])])
        ]);
      }
    });
 