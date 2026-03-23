<template>
  <div class="features">
    <YStack
      v-for="feature in features"
      :key="feature.title"
      class="feature padding-md"
      background-color="bg"
    >
      <h3 class="feature-title">{{ feature.title }}</h3>
      <Separator />
      <ul aria-label="Feature details" class="feature-details">
        <li v-for="(detail, index) in feature.details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </YStack>
  </div>
</template>

<script setup>
import { YStack } from '@use-compose/ui';
import Separator from './Separator.vue';
const features = [
  {
    title: 'SVG to Vue Component at Build time',
    details: [
      `One Vue component is created per \`.svg\` file\n`,
      `No extra wrapper or specific pattern needed. Generated at build time, customizable at runtime using CSS custom properties`,
    ],
  },
  {
    title: 'Auto-Registration in Nuxt',
    details: [
      `Icons are generated and injected during the build process, and are available as any other components`,
    ],
  },
  {
    title: 'Theming and Runtime customization',
    details: [`Generated at build time, customizable at runtime using CSS custom properties`],
  },
  {
    title: 'Developer Experience',
    details: [
      `Auto-completion as part of the Nuxt build process, no extra configuration needed.`,
      `Vue DevTools support`,
    ],
  },
];
</script>

<style scoped>
.features {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  display: grid;
}

.feature {
  display: flex;
  height: minmax(120px, 270px);
  width: 100%;
  flex-direction: column;
  background: rgba(91, 18, 21, 0.25);
  background-color: #1c1b1b;

  & > .feature-title {
    font-family: gotham, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
  }

  & > .feature-details {
    list-style: circle;
    margin: 0;
    padding: 0;
    & > li {
      display: inline-flex;
      line-height: normal;
      gap: var(--spacing-xs);
    }
    & > li::before {
      content: '';
      border: 4px solid var(--color-primary);
      border-radius: 50%;
      display: inline-block;
      background: transparent;
      line-height: inherit;
      height: 1rem;
      aspect-ratio: 1;
    }
  }
}
</style>
