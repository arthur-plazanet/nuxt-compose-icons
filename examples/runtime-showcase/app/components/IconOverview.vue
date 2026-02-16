<template>
  <div class="icon-overview">
    <input v-model="q" placeholder="Search icons…" />

    <component :is="i.component" v-for="i in filteredResolved" :key="i.name" />
  </div>
</template>

<script setup lang="ts">
import { useComposeIconRegistry } from '#imports';
import { computed, ref, resolveComponent, type Component } from 'vue';

const { searchIcons } = useComposeIconRegistry();
const q = ref('');

const filteredResolved = computed(() => {
  return searchIcons(q.value).map((i) => ({
    name: i.name,
    component: resolveComponent(i.name) as Component,
  }));
});
</script>
<style>
.icon-overview {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--icon-size-xl), 1fr));
}
</style>
