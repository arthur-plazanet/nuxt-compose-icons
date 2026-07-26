<template>
  <div class="features">
    <YStack v-for="feature in features" :key="feature.title" class="feature padding-md">
      <h3 class="feature__title">{{ feature.title }}</h3>
      <Separator width="24px" no-margin />
      <p class="feature__desc">{{ feature.desc }}</p>
    </YStack>
  </div>
</template>

<script setup>
import { YStack } from '@use-compose/ui';
import Separator from './Separator.vue';

const features = [
  {
    title: 'SVG → Vue at build time',
    desc: 'One component per SVG file, auto-imported and type-safe. No manual registration.',
  },
  {
    title: 'CSS custom property theming',
    desc: 'Fill, stroke and stroke-width become CSS variables with the original value as fallback.',
  },
  {
    title: 'Native Nuxt integration',
    desc: 'Works with Nuxt auto-import. Full Vue DevTools support.',
  },
  {
    title: 'Scales with your design system',
    desc: 'Folder-based namespacing, configurable naming conventions, monorepo-ready.',
  },
];
</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: var(--gutter);
}

.feature {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature__title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
  text-transform: none;
  font-family: var(--vp-font-family-base);
}

.feature__desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}
</style>
