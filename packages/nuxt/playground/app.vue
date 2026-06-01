<template>
  <ClientOnly>
    <NuxtPage />
  </ClientOnly>
</template>

<script setup lang="ts">
// import type { YTheme } from '@use-compose/ui';
// import { AppCompose, Wrapper } from '@use-compose/ui';
// import { useCookie } from 'nuxt/app';

// const theme: YTheme | undefined = useCookie<{ primary: string; background: string; dark: string }>(
//   'theme',
// // );
// const myTheme = {
//   primary: '#c1272d',
//   background: 'linear-gradient(0deg, #070101 0%, #2f0a0b 50%, #070101 100%)',
//   dark: '#0b0c0c',
// };

// // const primary = ref(myTheme.primary);
// const background = ref(myTheme.background);

// theme.value = { ...myTheme };
</script>

<style>
body {
  margin: 0;
}

/* https://css-tricks.com/use-css-clamp-to-create-a-more-flexible-wrapper-utility/ */
.wrapper {
  width: clamp(16rem, 90vw, 120rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
