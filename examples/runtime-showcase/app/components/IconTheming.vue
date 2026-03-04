<template>
  <YRow type="cluster">
    <YInputText
      v-for="size in sizes"
      :key="size"
      v-model="iconSizes[size]"
      type="number"
      :name="size"
      :placeholder="`${size.toUpperCase()} icon size`"
    />
  </YRow>
</template>

<script setup lang="ts">
import { setRootCssVar } from '@/utils/root-css-vars';
import { YInputText, YRow } from '@use-compose/ui';
import { reactive, watchEffect } from 'vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const iconSizes = reactive({
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
});

watchEffect(() => {
  if (!import.meta.client) return;

  for (const [size, value] of Object.entries(iconSizes)) {
    setRootCssVar(`--size-${size}`, `${value}px`);
  }
});
</script>

<style scoped></style>
