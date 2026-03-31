// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
import './assets/compose.css';
// import './assets/scss/main.scss';
import DefaultTheme from 'vitepress/theme';
import './assets/main.css';
import './assets/vitepress/custom-vp.css';
import './assets/vitepress/theme.css';
import CustomLayout from './CustomLayout.vue';
// import './theme.css';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  // enhanceApp({ app }: EnhanceAppContext) {
  // const moduleFile = import.meta.url('vue3-code-highlighter');
  // ('📟 - file: index.ts:20 - moduleFile → ', moduleFile.VueCodeHighlighter);
  // app.use(TwoslashFloatingVue);
  // app.component('VueCodeHighlighter', VueCodeHighlighter);
  // ('📟 - file: index.ts:33 - VueCodeHighlighter → ', VueCodeHighlighter);
  // app.component('VueCodeHighlighterMulti', VueCodeHighlighterMulti);
  // },
} satisfies Theme;
