<template>
  <div class="icon-overview">
    <Component
      :is="component"
      v-for="(component, index) in components"
      :key="index"
      :color="iconStyles"
      :stroke="getRandomColor()"
      :stroke-width="props.strokeWidth"
      :fill="props.fill"
      size="xl"
      :some-prop="`Component ${index + 1}`"
    />
    <AlarmBellIcon />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, resolveComponent, type Component } from 'vue';
import { useComposeIcon } from '../../src/runtime/composables/compose-icon';
import type { ComposeIconSize } from '../../src/runtime/types';
import * as AllIcons from './nuxt-compose-icons';

interface IconOverviewProps {
  size: ComposeIconSize;
  color: string;
  stroke?: string;
  strokeWidth?: string | number;
  fill?: string;
}

const props = defineProps<IconOverviewProps>();

// const components = ref<ReturnType<typeof defineAsyncComponent>[]>([]);
const components = ref<(Component | string)[]>([]);

const loadComponents = () => {
  return Object.keys(AllIcons).map((file) => {
    const component = resolveComponent(file);
    return component;
  });
};
const { iconClasses } = useComposeIcon({ size: 'sm' });
// eslint-disable-next-line no-console
console.log('📟 - iconClasses → ', iconClasses);

onMounted(() => {
  components.value = loadComponents();
});

const iconStyles = computed(() => {
  return getRandomColor();
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style>
.icon-overview {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--icon-size-xl), 1fr));
}
</style>
