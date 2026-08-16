<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
// import BackgroundIcons from './components/BackgroundIcons.vue';
import LogoIcon from './components/icons/LogoIcon.vue';

const { Layout } = DefaultTheme;
// const route = useRoute();
// The home page (docs/index.md) renders its own icon background via
// IconOverview inside Home.vue — skip the layout-level one there to avoid
// stacking both.
// const isHome = () => route.path === '/' || route.path === '/index.html';
</script>

<template>
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
</style>
