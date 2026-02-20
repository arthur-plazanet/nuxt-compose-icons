<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
import { AppCompose, YTheme } from '@use-compose/ui';
import DefaultTheme from 'vitepress/theme';

import '@use-compose/ui/style.css';
import './assets/main.css';
import LogoIcon from './components/icons/LogoIcon.vue';

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
      <Layout class="home-layout">
        <template #nav-bar-title-before>
          <LogoIcon size="xl" />
        </template>
      </Layout>
    </AppCompose>
  </ClientOnly>
</template>
