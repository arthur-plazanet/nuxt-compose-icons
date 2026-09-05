<template>
  <section class="home-bg">
    <IconOverview>
      <!-- <div class="home-content"> -->
      <YWrapper>
        <Banner />
      </YWrapper>
      <!-- </div> -->
    </IconOverview>
  </section>
</template>

<script setup lang="ts">
import { YWrapper } from '@use-compose/ui';
import Banner from './Banner.vue';
import IconOverview from './IconOverview.vue';
</script>

<style scoped></style>
