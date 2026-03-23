<template>
  <ClientOnly>
    <AppCompose>
      <NuxtPage />
    </AppCompose>
    <template #fallback>
      <NuxtPage />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { AppCompose } from '@use-compose/ui';
import 'highlight.js/styles/stackoverflow-light.css';
</script>
