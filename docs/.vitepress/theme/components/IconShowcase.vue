<template>
  <YRow
    type="cluster"
    gap="2rem"
    align="center"
    background-color="var(--vp-c-bg-soft)"
    radius="medium"
    border-color="var(--vp-c-divider)"
  >
    <YStack gap="2rem">
      <YCenter>
        <label for="size"> Size: {{ sizeInput }}</label>
        <input type="range" id="size" name="size" min="1" max="4" v-model="sizeInput" />
      </YCenter>

      <YCenter>
        <label for="color"> Main color</label>
        <input type="color" id="color" name="color" v-model="colorInput" />
      </YCenter>
    </YStack>

    <YCenter>
      <LexiqueIcon :size="iconSize" :color="colorInput" />
    </YCenter>
  </YRow>
</template>

<script setup lang="ts">
import { YCenter, YRow, YStack } from '@use-compose/ui';
import { computed, ref } from 'vue';
import LexiqueIcon from './icons/LexiqueIcon.vue';

const sizeInput = ref<number>(3);
const colorInput = ref<string>('#334155');

const iconSize = computed(() => {
  switch (sizeInput.value) {
    case 1:
      return 'xs';
    case 2:
      return 'sm';
    case 3:
      return 'md';
    case 4:
      return 'lg';
    default:
      return 'md';
  }
});
</script>

<style scoped></style>
