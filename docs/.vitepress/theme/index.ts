import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
/* Patched: original vue-code-highlighter/dist/style.css had a blocking @import
   for fonts.cdnfonts.com. This copy has that line removed. */
import './assets/main.css';
import './assets/vendor/vue-code-highlighter.css';
import CustomLayout from './CustomLayout.vue';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
} satisfies Theme;
