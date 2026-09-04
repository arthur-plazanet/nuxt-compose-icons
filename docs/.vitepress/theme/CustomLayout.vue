<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
// import BackgroundIcons from './components/BackgroundIcons.vue';
import type { YTheme } from '@use-compose/ui';
import { AppCompose } from '@use-compose/ui';
import LogoIcon from './components/icons/LogoIcon.vue';

const { Layout } = DefaultTheme;

const theme: YTheme = {
  primary: '#c1272d',
  secondary: '#1e1e1e',
  background: '#000000',
};
// const route = useRoute();
// The home page (docs/index.md) renders its own icon background via
// IconOverview inside Home.vue — skip the layout-level one there to avoid
// stacking both.
// const isHome = () => route.path === '/' || route.path === '/index.html';
</script>

<template>
  <AppCompose :theme="theme" class="app-docs">
    <div class="home-layout">
      <!-- <div v-if="!isHome()" class="docs-bg-icons" aria-hidden="true">
      <BackgroundIcons :count="12" />
    </div> -->
      <Layout>
        <template #nav-bar-title-before>
          <LogoIcon class="navbar-logo" size="m" />
        </template>
      </Layout>
    </div>
  </AppCompose>
</template>

<style scoped>
.docs-bg-icons {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.05;
}
.app-docs {
  --main-bg: linear-gradient(6deg, #070101 25%, #2f0a0b 55%, #070101 var(--bg-opacity, 75%));
  background: var(--main-bg);
}
</style>
