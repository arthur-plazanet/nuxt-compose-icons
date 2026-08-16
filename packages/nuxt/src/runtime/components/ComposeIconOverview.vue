<template>
  <div class="icons-overview">
    <input v-model="q" type="text" placeholder="Search icons…" class="icons-overview__search" />
    <div class="icons-overview__grid">
      <div v-for="icon in filtered" :key="icon.name" class="icons-overview__item">
        <Component :is="icon.component" v-bind="iconProps" />
        <template v-if="hasIconName">
          <span class="icons-overview__pascal">&lt;{{ icon.pascalName }} /&gt;</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useComposeIconRegistry } from '../composables/use-compose-icon-registry';
import type { ComposeIconProps } from '../types/compose-icons-props';

const props = withDefaults(defineProps<ComposeIconProps & { hasIconName?: boolean }>(), {
  hasIconName: false,
});

const q = ref('');
const { filteredIcons } = useComposeIconRegistry();
const filtered = filteredIcons(q);

const iconProps = computed(() => {
  const entries = Object.entries(props).filter(([k]) => k !== 'hasIconName');
  return Object.fromEntries(entries) as ComposeIconProps;
});
</script>

<style scoped>
.icons-overview__search {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid #333;
  border-radius: 6px;
  color: inherit;
  box-sizing: border-box;
}

.icons-overview__search::placeholder {
  color: #555;
}

.icons-overview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.icons-overview__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 0.75rem;
  border-radius: 6px;
  text-align: center;
  min-width: 0;
}

.icons-overview__pascal {
  /* font-size: 0.875rem; */
  color: #1c1b1b;
  word-break: break-all;

  /* line-height: 1.3; */
  font-weight: 500;
}
</style>
