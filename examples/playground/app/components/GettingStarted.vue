<template>
  <div class="getting-started">
    <h2 class="title">Getting Started (source: https://nuxt-icons.use-compose.com/)</h2>
    <CodeHighlighter
      class="codeSvg"
      language="graphql"
      :code="codeSvg"
      title="SVG Directory Structure"
    />
    <CodeHighlighter class="codeVue" language="vue" :code="codeVue" title="Vue Component Usage" />
    <CodeHighlighter
      class="codeConfig"
      language="typescript"
      :code="codeConfig"
      title="nuxt.config.ts"
    />
    <CodeHighlighter
      class="codeDotNuxt"
      language="typescript"
      :code="codeDotNuxt"
      title=".nuxt/icons-generated/components.ts"
    />
  </div>
</template>

<script setup lang="ts">
import CodeHighlighter from './CodeHighlighter.vue';

// https://github.com/vuejs/vitepress/issues/603
const codeSvg = `icons/                                       
        ├─ pictos_modules_chronologie.svg                     
        ├─ add-note.svg                                       
        ├─ delete.svg                                         
        ├─ logo.svg                                           
        ├─ link.svg                                           
        ├─ trash.svg                                          
        └─ twitter.svg                                         
`;

const codeConfig = `// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    // optional configuration
    pathToIcons: './app/assets/icons', // path to your initial SVG icons
    generatedComponentOptions: {
      suffix: 'Icon',
      case: 'pascal',
      componentsDestDir: './app/components/ui/icons',
    },
  },
});`;

const codeVue = `<template>
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

const codeDotNuxt = `/* At build time, 
* You will be able to see the injected components.ts inside your .nuxt directory
* The path will be the path of the module with a subdirectory "icons-generated"
*/

'AddNoteIcon': typeof import("../icons-generated/AddNoteIcon.vue")['default'];
'DeleteIcon': typeof import("../icons-generated/DeleteIcon.vue")['default'];
'EditIcon': typeof import("../icons-generated/EditIcon.vue")['default'];
'SettingsIcon': typeof import("../icons-generated/SettingsIcon.vue")['default'];
'SlideRightIcon': typeof import("../icons-generated/SlideRightIcon.vue")['default'];
'TimeIcon': typeof import("../icons-generated/TimeIcon.vue")['default'];

// with all your own components`;
</script>

<style>
.getting-started {
  max-height: 35%;
  background-color: #1c1b1b;
  display: grid;
  grid-template-areas:
    'title title . .'
    'codeSvg codeConfig codeVue codeDotNuxt';
  grid-template-rows: 50px 1fr;
}
.title {
  grid-area: title;
}
.codeSvg {
  grid-area: codeSvg;
}
.codeConfig {
  grid-area: codeConfig;
}
.codeVue {
  grid-area: codeVue;
}
.codeDotNuxt {
  grid-area: codeDotNuxt;
}
</style>
