<template>
  <input v-model="q" placeholder="Search icons…" />
  <YRow type="cluster" class="icon-overview">
    <YBox
      padding="xs"
      border="width-medium solid primary"
      background-color="neutral"
      width="auto"
      v-for="x in filteredResolved"
      :key="x.key"
    >
      <Component :is="x.comp" size="lg" color="blue" strokeWidth="4" />
    </YBox>
    <BoutonTwitterIcon size="2xl" color="red" stroke="blue" fill="green" stroke-width="87" />
  </YRow>
</template>

<script setup lang="ts">
import { useComposeIconRegistry } from '#imports';
import { YBox, YRow } from '@use-compose/ui';
import { computed, onMounted, type Component } from 'vue';

const { icons, searchIcons } = useComposeIconRegistry();

const iconsComponent = ref(
  icons.map((icon) =>
    defineAsyncComponent(() => import(`./icons/${icon.pascalName}`)),
  ) as Component[],
);
icons;
const q = ref('');

const iconsList = computed(() => {
  const query = q.value.trim();
  return query ? searchIcons(query) : icons;
});

const filteredResolved = computed(() =>
  iconsList.value.map((icon) => ({
    key: icon.pascalName,
    comp: defineAsyncComponent(() => import(`./icons/${icon.pascalName}`)),
  })),
);

onMounted(() => {
  ('Icons list:', iconsList.value);
  ('Filtered resolved:', filteredResolved.value);
});
</script>
<style>
.icon-overview {
  /* display: grid;
  gap: var(--gutter); */
}
</style>
