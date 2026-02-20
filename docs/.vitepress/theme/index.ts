// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
import './assets/compose.css';
import './assets/main.css';
import './assets/scss/main.scss';
import './assets/scss/style.scss';
import CustomLayout from './CustomLayout.vue';
// import './theme.css';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  // enhanceApp({ app }: EnhanceAppContext) {
  // const moduleFile = import.meta.url('vue3-code-highlighter');
  // ('📟 - file: index.ts:20 - moduleFile → ', moduleFile.VueCodeHighlighter);
  // app.use(TwoslashFloatingVue);
  // app.component('VueCodeHighlighter', VueCodeHighlighter);
  // ('📟 - file: index.ts:33 - VueCodeHighlighter → ', VueCodeHighlighter);
  // app.component('VueCodeHighlighterMulti', VueCodeHighlighterMulti);
  // },
} satisfies Theme;
