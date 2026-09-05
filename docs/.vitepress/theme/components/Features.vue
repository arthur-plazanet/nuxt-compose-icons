<template>
  <YRow type="switcher" class="features">
    <div v-for="feature in features" :key="feature.title" class="feature padding-md">
      <h3 class="feature__title">{{ feature.title }}</h3>
      <Separator width="24px" no-margin />
      <p v-for="value in feature.desc" :key="value" class="feature__desc">{{ value }}</p>
    </div>
  </YRow>
</template>

<script setup>
import { YRow } from '@use-compose/ui';
import Separator from './Separator.vue';

const features = [
  {
    title: 'SVG file to Vue component at build time',
    desc: [
      'One component per SVG file, auto-imported and type-safe.',
      'No manual registration in a Nuxt project.',
      'Can be versioned independently.',
    ],
  },

  {
    title: 'Scales with your design system',
    desc: [
      'Your own in-house icon component library, directly usable',
      'Configurable naming conventions',
      'Use CSS Custom Properties for theming, with global or scoped CSS.',
    ],
  },
  {
    title: 'Icons components can exist independently of Nuxt',
    desc: [
      'Built folder from Nuxt can be shipped as independent Vue components.',
      'Monorepo-friendly setup',
      'A UI Library can consume these components or use them in Storybook.',
    ],
  },
  {
    title: 'Developer Experience',
    desc: [
      'Auto-completion, type-checking for your icon components as any other Vue component.',
      'Full Vue DevTools support, Icon component can be inspected individually',
    ],
  },
];
</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--feature-min-width, 220px), 1fr));
  gap: var(--gutter);

  @media screen and (min-width: 764px) {
    --feature-min-width: 300px;
  }

  @media screen and (min-width: 1240px) {
    --feature-min-width: 220px;
  }
}

.feature {
  display: grid;
  grid-template-rows: 100px auto 1fr;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  --stack-gap: 0.25rem;
  gap: var(--stack-gap);
  justify-content: center;

  &:last-child:nth-child(2n + 1) {
    grid-column-end: span 2;
  }

  &:nth-last-child(2):nth-child(3n + 1) {
    grid-column-start: 1;
  }
}

.feature__title {
  /* font-size: 0.95rem; */
  font-weight: 700;
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
