<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import LogoIcon from './components/icons/LogoIcon.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <ClientOnly>
    <!-- <AppCompose :theme="theme"> -->
    <div class="home-layout">
      <!-- <div class="home-bg"></div> -->
      <!-- <Content /> -->
      <Layout>
        <template #nav-bar-title-before>
          <LogoIcon class="navbar-logo" size="m" />
        </template>
        <!-- <Content /> -->
      </Layout>
    </div>
    <!-- </AppCompose> -->
  </ClientOnly>
</template>
