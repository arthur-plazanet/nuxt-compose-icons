<template>
  <div>simple</div>
  <ArrowUpIcon />
  <div>subpaths:{{ subpathExports }}</div>
</template>

<script setup lang="ts">
// Regression guard for #431: `nuxt-compose-icons/composables` is a declared export subpath
// and must resolve on the *default* config, not just when the module's own generated
// components import it directly.
//
// Aliased on import so these resolve through the export map rather than the auto-imports.
import {
  useComposeIcon as barrelUseComposeIcon,
  useComposeIconTheme as barrelUseComposeIconTheme,
} from 'nuxt-compose-icons/composables';

const subpathExports = [barrelUseComposeIcon, barrelUseComposeIconTheme]
  .map((exported) => typeof exported)
  .join(',');
</script>
