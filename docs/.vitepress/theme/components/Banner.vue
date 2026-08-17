<template>
  <YStack style="--gutter: 4rem">
    <YFlow class="banner__hero y-flow">
      <LogoIcon class="banner__logo" />

      <h1 class="banner__title">
        Nuxt <YHighlightedText active as="span">Compose</YHighlightedText> Icons
      </h1>

      <Separator width="60px" />

      <p class="banner__subtitle">Compose your own Icon components library</p>

      <p class="banner__tagline">
        No extra wrapper needed.<br />
        <span class="banner__brand">Generated</span> at build time,
        <span class="banner__brand">customizable</span> at runtime using CSS custom properties
      </p>

      div

      <div class="banner__actions">
        <VPButton href="/guide/motivation" text="Get Started" />
        <VPButton
          href="https://github.com/arthu-pr/nuxt-compose-icons"
          target="_blank"
          rel="noopener"
          text="GitHub"
        />
      </div>
    </YFlow>

    <div class="banner__body">
      <ClientOnly>
        <ModuleTemplateExample class="banner__example" />
      </ClientOnly>
      <Features class="banner__features" />
    </div>
  </YStack>
</template>

<script setup lang="ts">
import { YFlow, YHighlightedText, YStack } from '@use-compose/ui';
import { VPButton } from 'vitepress/theme';
import Features from './Features.vue';
import LogoIcon from './icons/LogoIcon.vue';
import ModuleTemplateExample from './ModuleTemplateExample.vue';
import Separator from './Separator.vue';
</script>

<style scoped>
.banner__hero {
  --_flow-space: 1.25rem;
  max-width: 580px;
}

.banner__logo {
  --icon-fill: var(--color-primary);
  width: 4rem;
  height: 4rem;
}

/* White text inside YHighlightedText "Compose" */
.banner__title :deep(.highlighted span) {
  color: white;
}

.banner__title {
  font-size: var(--font-scale-6); /* 25px → 44px fluid */
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  font-weight: 800;
  margin: 0;
  text-transform: none;
  font-family: var(--vp-font-family-base);
}

.banner__subtitle {
  font-size: var(--font-scale-3);
  color: var(--vp-c-text-1);
  font-weight: 600;
  margin: 0;
  line-height: 1.4;

  &::first-letter {
    color: var(--color-primary);
  }
}

.banner__tagline {
  font-size: var(--font-scale-2);
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.banner__brand {
  color: var(--color-primary);
  font-weight: 600;
}

.banner__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.banner__actions a {
  text-decoration: none;
}

/* Body: stacked on mobile, side-by-side on desktop */
.banner__body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

@media (min-width: 860px) {
  .banner__body {
    flex-direction: row;
    align-items: flex-start;
    gap: 3.5rem;
  }

  .banner__example {
    flex: 0 0 340px;
    position: sticky;
    top: calc(var(--vp-nav-height) + 2rem);
  }

  .banner__features {
    flex: 1;
  }
}
</style>
