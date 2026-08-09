<template>
  <div class="stack getting-started">
    <h2 class="title">
      Getting started —
      <a href="https://nuxt-icons.use-compose.com/" class="title__link">
        nuxt-icons.use-compose.com
      </a>
    </h2>
    <div class="switcher">
      <CodeHighlighter v-bind="nuxtConfigConfig" />
      <CodeHighlighter v-bind="nuxtBuildConfig" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Snippets live here as plain strings rather than inline in the template: raw code
// containing `<` or `{{ }}` cannot be written directly in a Vue template.
// https://github.com/vuejs/vitepress/issues/603
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

const nuxtConfigConfig = {
  code: nuxtConfigTemplate,
  title: 'Nuxt config',
  fileName: 'nuxt.config.ts',
};

const nuxtBuildConfig = {
  code: nuxtBuildTemplate,
  title: 'Generated types',
  fileName: 'components.d.ts',
};
</script>

<style scoped>
.getting-started {
  --gutter: 1.5rem;

  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
}

.title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #f1f1f1;
}

.title__link {
  color: var(--brand);
  text-decoration: none;
}

.title__link:hover {
  text-decoration: underline;
}
</style>
