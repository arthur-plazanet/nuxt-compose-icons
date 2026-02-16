<template>
  <VueCodeHighlighter v-if="!multi" :code="simpleCode" :lang="lang" :file-name="fileName" />
  <VueCodeHighlighterMulti v-if="multi" :code="codeMulti" />
</template>

<script setup lang="ts">
// import { VueCodeHighlighterMulti } from 'vue-code-highlighter';
import * as vueCodeH from 'vue-code-highlighter';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
const { VueCodeHighlighterMulti, VueCodeHighlighter } = vueCodeH;

interface CodeHighlighterMulti {
  code: string;
  lang: string;
  title?: string;
}
interface CodeHighlighterProps {
  fileName?: string; // File name to display as metadata
  code: Array<CodeHighlighterMulti> | string; // Code to highlight, can be a single string or an array of objects
  multi?: boolean; // Flag to indicate if multiple code blocks are present
  lang?: string; // Language for syntax highlighting, default is 'html'
}

const props: CodeHighlighterProps = withDefaults(defineProps<CodeHighlighterProps>(), {
  multi: false,
  lang: 'html',
  fileName: undefined,
});

let simpleCode: string, codeMulti: Array<CodeHighlighterMulti>;
if (props.multi) {
  codeMulti = props.code as Array<CodeHighlighterMulti>;
} else {
  simpleCode = props.code as string;
}
const lang: string = props.multi ? '' : (props.lang as string);
// const codeHighlighter = props.multi ? VueCodeHighlighterMulti : VueCodeHighlighter;
</script>
