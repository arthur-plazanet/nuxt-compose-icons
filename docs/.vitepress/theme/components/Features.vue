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
      <p>{{ feature.details }}</p>
    </YStack>
  </div>
</template>

<script setup>
import { YStack } from '@use-compose/ui';
import Separator from './Separator.vue';
const features = [
  {
    title: 'SVG to Vue Component at Build time',
    details: 'One Vue component per SVG file, no extra wrapper needed',
  },
  {
    title: 'Auto-Registration in Nuxt',
    details:
      'Icons are generated and injected during the build process, and are available as any other components',
  },
  {
    title: 'Theming and Runtime customization',
    details: 'Generated at build time, customizable at runtime using CSS custom properties',
  },
  {
    title: 'Developer Experience',
    details: `Auto-completion as part of the Nuxt build process, no extra configuration needed.
              Vue DevTools support`,
  },
];
</script>

<style lang="scss">
@import '../assets/scss/abstracts/mixins';

.features {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  display: grid;
}

.feature {
  display: flex;
  min-height: 120px;
  width: 100%;
  // padding: 16px 24px;
  flex-direction: column;
  // gap: 16px;
  // border: 1px solid #5b1215;
  background: rgba(91, 18, 21, 0.25);
  background-color: #1c1b1b;

  .feature-title {
    // font-size: var(--text-lg);
    font-family: gotham, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
  }
}

@include media('md') {
  .features {
    // flex-direction: column;

    .feature {
      max-width: 280px;
      // width: calc(100% / 2);
    }
  }
}
</style>
