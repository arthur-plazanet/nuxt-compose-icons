<template>
  <div class="container">
    <!-- <IconOverview :stroke-width="3" :size="'sm'" color="#c1272d" /> -->
    <ComposeIconOverview :icons="icons" size="lg" />
  </div>
</template>

<script setup lang="ts">
import { useComposeIconRegistry } from 'nuxt-compose-icons/registry';
const { icons } = useComposeIconRegistry();
</script>

<style>
body {
  background-color: #1c1b1b;
}

.container {
  min-height: 100svh;
  align-content: center;
}
</style>
