<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .page-enter-active, .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from, .page-leave-to {
    opacity: 0.5;
    transform: grayscale(1);
  }
</style>

<script setup>
  definePageMeta({
    pagetransition: { name: 'page', mode: 'out-in' }
  })
</script>