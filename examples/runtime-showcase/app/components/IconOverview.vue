<template>
  <ComposeIconOverview :icons="icons" size="lg" has-icon-name />
</template>

<script setup lang="ts">
import { useComposeIconRegistry } from 'nuxt-compose-icons/composables';
const { icons } = useComposeIconRegistry();
</script>
