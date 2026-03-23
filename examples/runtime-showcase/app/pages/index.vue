<template>
  <GettingStarted />
  <ClientOnly>
    <Wrapper>
      <ClocheIcon size="sm" color="#c1272d" />
      <IconTheming />
      <IconOverview stroke-width="3" :size="'sm'" color="#c1272d" />
    </Wrapper>
    <template #fallback>
      <ClocheIcon size="sm" color="#c1272d" />
      <IconOverview stroke-width="3" :size="'sm'" color="#c1272d" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Wrapper } from '@use-compose/ui';
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

<style>
.presentation {
  background-color: black;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: auto;
}
</style>
