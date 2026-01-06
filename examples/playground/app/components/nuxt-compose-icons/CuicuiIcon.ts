
    import { defineComponent, h, type PropType } from 'vue';

    // TODO: see [ROADMAP](../../ROADMAP.md#build-icons-in-dot-nuxt)
    import { useComposeIcon } from '#imports';
    // import type { IconSizeKeyValue } from 'nuxt-compose-icons/types';

    export default defineComponent({
      name: 'CuicuiIcon',
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
  "width": 34,
  "height": 27,
  "fill": "none",
  "viewBox": "0 0 34 27"
};

        return () => h('svg', buildSvgAttributes(svgAttributes), [
          h('g', {
  "clip-path": "url(#clip0_1_498)"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M11.1404 26.1027C23.2121 26.1027 29.8166 16.3829 29.8166 7.95647C29.8166 7.68322 29.8104 7.40389 29.7979 7.13064C31.0827 6.22787 32.1914 5.10967 33.072 3.82856C31.8755 4.34582 30.605 4.68364 29.3042 4.83048C30.6739 4.03273 31.6995 2.77951 32.1908 1.30312C30.9022 2.04512 29.493 2.56854 28.0236 2.85093C27.0336 1.82879 25.7245 1.15201 24.2989 0.92523C22.8732 0.698448 21.4104 0.934297 20.1366 1.59631C18.8627 2.25832 17.8488 3.30963 17.2516 4.58769C16.6543 5.86575 16.5071 7.29938 16.8325 8.66692C14.2233 8.5397 11.6707 7.88113 9.34029 6.73391C7.00985 5.58669 4.95354 3.97642 3.30469 2.0075C2.46666 3.41137 2.21022 5.07261 2.58749 6.65358C2.96476 8.23456 3.94744 9.61665 5.3358 10.5189C4.2935 10.4868 3.27404 10.2141 2.36163 9.72349V9.80243C2.3607 11.2757 2.88489 12.7038 3.84511 13.844C4.80532 14.9842 6.1423 15.7661 7.62877 16.0568C6.66324 16.3135 5.64988 16.3509 4.6671 16.1661C5.08655 17.4331 5.90265 18.5413 7.00151 19.336C8.10036 20.1306 9.42714 20.5721 10.7967 20.5989C8.47161 22.3734 5.59947 23.3359 2.64286 23.3314C2.11853 23.3306 1.59471 23.2994 1.07422 23.2378C4.07782 25.1101 7.57181 26.1045 11.1404 26.1027Z"
}, [])]),h('defs', {}, [h('clipPath', {
  "id": "clip0_1_498"
}, [h('path', {
  "fill": "var(--icon-fill, #fff)",
  "d": "M0 0H33V27H0z",
  "transform": "translate(0.5)"
}, [])])])
        ]);
      }
    });
 