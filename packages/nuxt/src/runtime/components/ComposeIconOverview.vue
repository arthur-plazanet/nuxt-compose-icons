<template>
  <div class="compose-icon-overview">
    <input
      v-model="q"
      type="text"
      placeholder="Search icons…"
      class="compose-icon-overview__search"
    />
    <div class="compose-icon-overview__grid">
      <div v-for="icon in filtered" :key="icon.pascalName" class="compose-icon-overview__item">
        <Component :is="icon.pascalName" v-bind="iconProps" />
        <span v-if="showNames" class="compose-icon-overview__name">{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useComposeIconRegistry } from '../composables/use-compose-icons-registry';
import type { ComposeIconProps } from '../types/compose-icons-props';

const props = withDefaults(defineProps<ComposeIconProps & { showNames?: boolean }>(), {
  showNames: true,
});

const { filteredIcons } = useComposeIconRegistry();
const q = ref('');
const filtered = filteredIcons(q);

const iconProps = computed(() => {
  const entries = Object.entries(props).filter(([k]) => k !== 'showNames');
  return Object.fromEntries(entries) as ComposeIconProps;
});
</script>
