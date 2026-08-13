<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import LogoIcon from './components/icons/LogoIcon.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <div class="home-layout">
    <Layout>
      <template #nav-bar-title-before>
        <LogoIcon class="navbar-logo" size="m" />
      </template>
    </Layout>
  </div>
</template>
