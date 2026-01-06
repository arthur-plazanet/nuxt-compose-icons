<template>
  <GettingStarted />
  <IconOverview stroke-width="3" :size="'sm'" color="#c1272d" />
</template>

<script setup lang="ts">
import GettingStarted from '~/components/GettingStarted.vue';

// import { useComposeIcon } from 'nuxt-compose-icons';
</script>

<style>
.presentation {
  background-color: black;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: auto;
}
</style>
