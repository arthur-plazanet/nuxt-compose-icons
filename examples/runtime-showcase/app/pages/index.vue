<template>
  <GettingStarted />
  <ClocheIcon size="sm" color="#c1272d" />
  <ClientOnly>
    <IconTheming />
  </ClientOnly>
  <IconOverview stroke-width="3" :size="'sm'" color="#c1272d" />
</template>

<script setup lang="ts">
import GettingStarted from '~/components/GettingStarted.vue';
</script>

<style>
.presentation {
  background-color: black;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: auto;
}
</style>
