<template>
  <YSection title="Icon overview">
    <input v-model="q" placeholder="Search icons…" />
    <YRow type="cluster" style="--icon-stroke: var(--color-primary)">
      <YBox
        v-for="x in filteredResolved"
        :key="x.key"
        padding="xs"
        border="width-medium solid primary"
        background-color="neutral"
        width="auto"
      >
        <!-- <Component :is="x.comp" size="lg" color="blue" stroke-width="4" /> -->
        <Component :is="x.comp" size="lg" />
      </YBox>
      <BoutonTwitterIcon
        size="2xl"
        color="red"
        stroke="blue"
        fill="green"
        stroke-width="87"
      /> </YRow
  ></YSection>
</template>

<script setup lang="ts">
import { useComposeIconRegistry } from '#imports';
import { YBox, YRow, YSection } from '@use-compose/ui';
import { computed, defineAsyncComponent, ref } from 'vue';

const { icons, searchIcons } = useComposeIconRegistry();
const q = ref('');

const iconsList = computed(() => {
  const query = q.value.trim();
  return query ? searchIcons(query) : icons;
});

const filteredResolved = computed(() => {
  return iconsList.value.map((icon) => ({
    key: icon.pascalName,
    comp: defineAsyncComponent(() => import(`./icons/${icon.pascalName}`)),
  }));
});
// return
</script>
