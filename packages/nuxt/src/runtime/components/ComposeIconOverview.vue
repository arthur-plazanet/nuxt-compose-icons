<template>
  <div class="runtime-showcase" :style="runtimeShowcaseStyle">
    <input v-model="q" type="text" placeholder="Search icons…" class="runtime-showcase__search" />
    <div
      v-for="icon in filtered"
      :key="icon.pascalName"
      class="runtime-showcase__item"
      :data-icon-name="icon.kebabName"
    >
      <Component :is="icon.component" v-bind="iconProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { computed, ref } from 'vue';
import type { ComposeIconProps } from '../types/compose-icons-props';

interface IconEntry {
  name: string;
  pascalName: string;
  kebabName: string;
  component: Component;
}

const props = withDefaults(
  defineProps<ComposeIconProps & { hasIconName?: boolean; icons: IconEntry[] }>(),
  { hasIconName: false },
);

const q = ref('');
const filtered = computed(() => {
  const term = q.value.trim().toLowerCase();
  if (!term) return props.icons;
  return props.icons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(term) ||
      icon.kebabName.includes(term) ||
      icon.pascalName.toLowerCase().includes(term),
  );
});

const runtimeShowcaseStyle = computed(() => {
  return props.hasIconName ? '--has-icon-name: ;' : '';
});

const iconProps = computed(() => {
  const entries = Object.entries(props).filter(([k]) => k !== 'hasIconName' && k !== 'icons');
  return Object.fromEntries(entries) as ComposeIconProps;
});
</script>
<style scoped>
.runtime-showcase {
  --has-icon-name: initial;
  container-type: inline-size;
  column-width: 18rem;
  column-gap: 0.5rem;

  & > * + * {
    margin-top: 1rem;
  }

  &__search {
    column-span: all;
    font-size: clamp(5.6526rem, 5.4068rem + 1.2288cqi, 6.3592rem);
    display: block;
    margin-bottom: 1rem;
  }

  &__item {
    /* display: grid; */
    gap: 0.5rem;

    &[data-icon-name] {
      &::after {
        content: var(--has-icon-name) attr(data-icon-name);
        display: block;
        font-size: var(--font-size-xs);
        color: var(--color-muted);
        text-align: center;
        margin-top: var(--spacing-sm);
      }
    }
  }
}
</style>
