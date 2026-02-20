<template>
  <div class="separator" :style="getStyles"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface SeparatorProps {
  width?: number | string;
  height?: number | string;
  noMargin?: boolean;
}
const props = withDefaults(defineProps<SeparatorProps>(), {
  width: '20%',
  noMargin: false,
});

const getStyles = computed(() => {
  const width = Number.isInteger(props.width) ? `${props.width}px` : props.width;
  const height = Number.isInteger(props.height) ? `${props.height}px` : props.height;
  return {
    width: width,
    height: height,
    ...(props.noMargin ? { margin: 0 } : {}),
  };
});
</script>

<style lang="scss">
@import '../assets/scss/abstracts/mixins';

.separator {
  margin: 6px 0 12px;
  background-color: var(--color-primary);
  height: 5px;

  @include media('lg') {
    height: 0.5rem;
  }
}
</style>
