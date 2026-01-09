<template>
  <VueCodeHighlighter
    v-if="!multi"
    :code="finalCode"
    :lang="lang || 'plaintext'"
    :file-name="fileName"
  />
  <VueCodeHighlighterMulti v-if="multi" :code="finalCode" />
</template>

<script setup lang="ts">
// import { VueCodeHighlighterMulti } from 'vue-code-highlighter';
import * as vueCodeH from 'vue-code-highlighter';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
const { VueCodeHighlighterMulti, VueCodeHighlighter } = vueCodeH;
interface CodeHighlighterProps {
  fileName?: string; // File name to display as metadata
  code:
    | Array<{
        code: string;
        lang: string;
        title?: string;
      }>
    | string; // Code to highlight, can be a single string or an array of objects
  multi?: boolean; // Flag to indicate if multiple code blocks are present
  lang?: string; // Language for syntax highlighting, default is 'html'
}

const props: CodeHighlighterProps = withDefaults(defineProps<CodeHighlighterProps>(), {
  multi: false,
  lang: 'html',
  fileName: undefined,
});

interface SimpleCode {
  code: string;
  lang: string;
  title?: string;
}

function getCode(): Array<SimpleCode> | string {
  if (props.multi) {
    return props.code as Array<SimpleCode>;
  } else {
    return props.code as string;
  }
}

const finalCode = getCode();
</script>
