<template>
  <div class="module-template-example">
    <!-- <VCodeBlock
      :code="vueComponentCode"
      highlightjs
      label="MyComponent.vue"
      lang="html"
      theme="neon-bunny"
    />
    <VCodeBlock
      :code="svgDirectoryCode"
      highlightjs
      label="Hello World"
      lang="bash"
      theme="neon-bunny"
    /> -->
    <CodeHighlighter :code="arrayCode" />
  </div>
</template>

<script setup lang="ts">
import CodeHighlighter from './CodeHighlighter.vue';

// https://github.com/vuejs/vitepress/issues/603
const svgDirectoryCode = `├── icons
  │   ├── add-note.svg
  │   ├── time.svg
  │   ├── slide-right.svg
`;

const vueComponentCode = `<template>
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

const arrayCode = [
  {
    code: vueComponentCode,
    lang: 'html',
    title: 'MyComponent.vue',
  },
  {
    code: svgDirectoryCode,
    lang: 'bash',
    title: 'SVG directory',
  },
];
</script>

<style lang="scss">
.module-template-example {
  min-width: 20cqi;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
}

.wrapper-codemulti-highlight {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  pre {
    flex-grow: 1;
  }

  code {
    height: 100%;
  }
}
</style>
