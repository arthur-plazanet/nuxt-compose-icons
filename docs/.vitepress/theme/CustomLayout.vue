<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import { AppCompose, YTheme } from '@use-compose/ui';
import '@use-compose/ui/style.css';
import DefaultTheme from 'vitepress/theme';
import LogoIcon from './components/icons/LogoIcon.vue';
// import './assets/main.css';
import './assets/vitepress/theme.css';

const theme: YTheme = {
  primary: '#c1272d',
  secondary: '#1e1e1e',
  background: '#000000',
};

const { Layout } = DefaultTheme;
</script>

<template>
  <ClientOnly>
    <AppCompose :theme="theme">
      <div class="home-layout">
        <!-- <div class="home-bg"></div> -->

        <Layout>
          <template #nav-bar-title-before>
            <LogoIcon class="navbar-logo" size="m" />
          </template>
          <!-- <Content /> -->
        </Layout>
      </div>
    </AppCompose>
  </ClientOnly>
</template>
