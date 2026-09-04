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
    <CodeHighlighter multi :code="arrayCode" />
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

<style>
.module-template-example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.wrapper-codemulti-highlight {
  display: flex;
  flex-direction: column;

  pre {
    flex-grow: 1;
  }

  .wrapper-title-codemulti-highlight {
    span {
      display: inline;
      block-size: auto;
    }

    &.tab-active,
    &:hover {
      /* background-color: var(--vp-button-brand-bg); */
      background-color: transparent;
      /* color: var(--vp-button-brand-bg); */
      font-weight: 900;
      span {
        position: relative;

        &::after {
          content: '';
          display: block;
          height: 5px;
          background-color: var(--vp-button-brand-bg);
          width: 20%;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      /* position: relative;

    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: var(--vp-button-brand-bg);
      width: 3px;
      position: absolute;
      bottom: 0;
      right: 0;
    } */
    }
  }
}
</style>
