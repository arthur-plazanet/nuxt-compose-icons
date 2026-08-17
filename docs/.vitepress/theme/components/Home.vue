<template>
  <YWrapper class="home-bg">
    <IconOverview>
      <div class="home-content">
        <div class="home">
          <Banner />
        </div>
      </div>
    </IconOverview>
  </YWrapper>
</template>

<script setup lang="ts">
import { YWrapper } from '@use-compose/ui';
import Banner from './Banner.vue';
import IconOverview from './IconOverview.vue';
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 4rem clamp(1rem, 4vw, 2rem) 6rem;
}
</style>
