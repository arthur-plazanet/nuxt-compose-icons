<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script setup>
import Banner from './Banner.vue';
</script>

<style scoped>
.home {
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 4rem clamp(1rem, 4vw, 2rem) 6rem;
}
</style>
