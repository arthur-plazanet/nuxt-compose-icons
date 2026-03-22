<template>
  <ComposeIconOverview :icons="icons" size="lg" has-icon-name />
</template>

<script setup lang="ts">
const { icons } = useComposeIconRegistry();
</script>
