<template>
  <YStack class="getting-started" style="--gutter: var(--layout-gutter-lg)">
    <h2 class="title">Getting Started (source: https://nuxt-icons.use-compose.com/)</h2>
    <YRow type="switcher">
      <CodeHighlighter v-bind="baseSvgConfig" />
      <CodeHighlighter v-bind="vueComponentsConfig" />
    </YRow>
    <YRow type="switcher">
      <CodeHighlighter v-bind="nuxtConfigConfig" />
      <CodeHighlighter v-bind="nuxtBuildConfig" />
    </YRow>
  </YStack>
</template>

<script setup lang="ts">
import { YRow, YStack } from '@use-compose/ui';
// https://github.com/vuejs/vitepress/issues/603
const svgFilesTemplate = `├── icons
  ├─ pictos_modules_chronologie.svg                     
  ├─ add-note.svg                                       
  ├─ delete.svg                                         
  ├─ logo.svg                                           
  ├─ link.svg                                           
  ├─ trash.svg                                          
  └─ twitter.svg                                         
`;

const nuxtConfigTemplate = `// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    pathToIcons: './assets/icons',
    component: {
      suffix: 'Icon',   // → <ArrowUpIcon />
      case: 'pascal',
    },
  },
});`;

const vueComponentsTemplate = `<template>
  <section>
    <!-- add-note.svg -->
    <AddNoteIcon size="2rem" color="var(--primary)" />

    <!-- time.svg -->
    <TimeIcon size="xl" color="#36365F" />

    <!-- slide-right.svg -->
    <SlideRightIcon size="2rem" color="var(--primary)" />
  </section>
</template>
`;

const nuxtBuildTemplate = `/* At build time, generated components appear in .nuxt/components.d.ts
* Each SVG becomes a fully typed Vue component
*/

'AddNoteIcon': typeof import("../compose-icons/AddNoteIcon.ts")['default'];
'DeleteIcon': typeof import("../compose-icons/DeleteIcon.ts")['default'];
'EditIcon': typeof import("../compose-icons/EditIcon.ts")['default'];
'SettingsIcon': typeof import("../compose-icons/SettingsIcon.ts")['default'];
'SlideRightIcon': typeof import("../compose-icons/SlideRightIcon.ts")['default'];
'TimeIcon': typeof import("../compose-icons/TimeIcon.ts")['default'];

// alongside all your own components`;

const baseSvgConfig = {
  code: svgFilesTemplate,
  lang: 'graphql',
  title: 'SVG Directory',
};

const vueComponentsConfig = {
  code: vueComponentsTemplate,
  lang: 'html',
  title: 'Vue Component',
};
const nuxtConfigConfig = {
  code: nuxtConfigTemplate,
  lang: 'typescript',
  title: 'Nuxt config',
};
const nuxtBuildConfig = {
  code: nuxtBuildTemplate,
  lang: 'typescript',
  title: 'Components.d.ts',
};
</script>

<style>
.getting-started {
  max-height: 35%;
  background-color: #1c1b1b;
  padding: 1rem;
}

.title {
  grid-area: title;
  color: white;
}

.code-svg {
  grid-area: code-svg;
}

.code-config {
  grid-area: code-config;
}

.code-vue {
  grid-area: code-vue;
}

.code-dot-nuxt {
  grid-area: code-dot-nuxt;
}
</style>
