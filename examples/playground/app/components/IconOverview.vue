<template>
  <div class="icon-overview">
    <div v-for="i in filtered" :key="i.name">
      <component :is="i.name" />
    </div>
    <!-- <Component
      :is="component"
      v-for="(component, index) in components"
      :key="index"
      :color="iconStyles"
      :stroke="getRandomColor()"
      :stroke-width="props.strokeWidth"
      :fill="true ? getRandomColor() : undefined"
      size="xl"
      :some-prop="`Component ${index + 1}`"
    />
    <AlarmBellIcon /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, resolveComponent, type Component } from 'vue';
// import { useComposeIcon } from '../../src/runtime/composables/compose-icon';
import { useComposeIconRegistry } from '#imports';
// import * as AllIcons from 'nuxt-compose-icons';

const { searchIcons, icons } = useComposeIconRegistry();
const q = ref('');

const filtered = computed(() => searchIcons(q.value));

// const components = ref<ReturnType<typeof defineAsyncComponent>[]>([]);
const components = ref<(Component | string)[]>([]);

const loadComponents = () => {
  return Object.keys(icons).map((file) => {
    const component = resolveComponent(file);
    return component;
  });
};

onMounted(() => {
  components.value = loadComponents();
});
</script>

<style>
.icon-overview {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--icon-size-xl), 1fr));
}
</style>
