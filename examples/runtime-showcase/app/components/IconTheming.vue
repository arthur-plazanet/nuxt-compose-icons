<template>
  <YRow type="cluster">
    <input
      v-for="size in sizes"
      :key="size"
      v-model="iconSizes[size]"
      type="text"
      :name="size"
      :placeholder="`${size.toUpperCase()} icon size`"
    />
  </YRow>
</template>

<script setup lang="ts">
import { setRootCssVar } from '@/utils/root-css-vars';
import { YRow } from '@use-compose/ui';
import { reactive, watchEffect } from 'vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const iconSizes = reactive({
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
});

watchEffect(() => {
  if (!import.meta.client) return;

  for (const [size, value] of Object.entries(iconSizes)) {
    setRootCssVar(`--size-${size}`, value);
  }
});
</script>

<style scoped></style>
