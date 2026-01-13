<template>
  <div style="display: flex">
    <input v-model="q" placeholder="Search icons…" />
    <input v-model="iconSizes.xs" type="text" name="xs" placeholder="XS icon size" />
    <input v-model="iconSizes.sm" type="text" name="sm" placeholder="SM icon size" />
    <input v-model="iconSizes.md" type="text" name="md" placeholder="MD icon size" />
    <input v-model="iconSizes.lg" type="text" name="lg" placeholder="LG icon size" />
    <input v-model="iconSizes.xl" type="text" name="xl" placeholder="XL icon size" />
  </div>
</template>

<script setup lang="ts">
const iconSizes = ref({
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
});

watch(
  iconSizes,
  (newSizes) => {
    Object.entries(newSizes).forEach(([size, value]) => {
      setRootCssVar(`--icon-size-${size}`, value);
    });
  },
  { immediate: true, deep: true },
);
</script>

<style scoped></style>
