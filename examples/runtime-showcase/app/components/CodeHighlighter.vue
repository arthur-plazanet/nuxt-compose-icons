<template>
  <figure class="code">
    <figcaption v-if="title || fileName" class="code__head">
      <span v-if="title" class="code__title">{{ title }}</span>
      <span v-if="fileName" class="code__file">{{ fileName }}</span>
    </figcaption>
    <!--
      `code` arrives as a prop holding a plain string, so Vue's text interpolation
      escapes it and <pre> preserves the whitespace. Writing the same snippet inline
      in a template would break compilation on `<` and `{{ }}` — which is why this
      goes through a prop rather than slot content.
    -->
    <pre class="code__body"><code>{{ code }}</code></pre>
  </figure>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Code to display, as a plain string. */
    code: string;
    /** Optional label shown above the block. */
    title?: string;
    /** Optional file name shown as metadata. */
    fileName?: string;
  }>(),
  {
    title: undefined,
    fileName: undefined,
  },
);
</script>

<style scoped>
.code {
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--border-radius-6);
  overflow: hidden;
  background: #141313;
}

.code__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-md);
  border-bottom: 1px solid var(--border);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.code__file {
  text-transform: none;
  letter-spacing: 0;
  color: var(--faint);
}

.code__body {
  margin: 0;
  padding: var(--spacing-md);
  overflow-x: auto;
  font-size: 0.8rem;
  line-height: 1.5;
  color: #d8d8d8;
  tab-size: 2;
}
</style>
