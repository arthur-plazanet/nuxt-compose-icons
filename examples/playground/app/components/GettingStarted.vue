<template>
  <div class="getting-started">
    <h2 class="title">Getting Started (source: https://nuxt-icons.use-compose.com/)</h2>
    <div class="code-svg">
      <CodeHighlighter language="graphql" :code="codeSvg" title="SVG Directory Structure" />
    </div>

    <div class="code-vue">
      <CodeHighlighter language="vue" :code="codeVue" title="Vue Component Usage" />
    </div>
    <div class="code-config">
      <CodeHighlighter language="typescript" :code="codeConfig" title="nuxt.config.ts" />
    </div>
    <div class="code-dot-nuxt">
      <CodeHighlighter
        language="typescript"
        :code="codeDotNuxt"
        title=".nuxt/icons-generated/components.ts"
      />
    </div>
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
  padding: 1rem;
  display: grid;
  grid-template-areas:
    'title title . .'
    'code-svg code-config code-vue code-dot-nuxt';
  grid-template-rows: 50px 1fr;
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
