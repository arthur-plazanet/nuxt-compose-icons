<template>
  <div>basic</div>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <build-logo-icon />
  <div>defaultSizeKey:{{ defaultSizeKey }}</div>
</template>

<script setup lang="ts">
// Regression guard: defaultSize (module option) must flow through to the runtime hand-call
// path too, not just codegen's baked-in prop default — see useComposeIconTheme. Imported from
// source rather than relying on Nuxt auto-import, which this fixture's eslint config doesn't
// resolve (same reasoning as the "simple" fixture's explicit import).
import { useComposeIconTheme } from '../../../../src/runtime/composables/use-compose-icon-theme';

const { defaultSizeKey } = useComposeIconTheme();
</script>
