<template>
  <div class="icon-overview">
    <!-- <input v-model="q" placeholder="Search icons…" />
    <ul>
      <li v-for="i in filtered" :key="i.name">
        <component :is="i.name" class="w-6 h-6" />
        <span>{{ i.kebabName }}</span>
      </li>
    </ul>
    <Component />
     :is="component" v-for="(component, index) in components" :key="index" :color="iconStyles"
    :stroke="getRandomColor()" :stroke-width="props.strokeWidth" :fill="true ? getRandomColor() :
    undefined" size="xl" :some-prop="`Component ${index + 1}`" /> -->
    <ArticleIcon v-bind="iconStyles" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import { ArticleIcon } from './nuxt-compose-icons';
// const { searchIcons } = useComposeIconRegistry();
const iconStyles = computed(() => {
  return { color: getRandomColor(), size: 'lg' };
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
  height: 100svh;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--icon-size-xl), 1fr));
}
</style>
