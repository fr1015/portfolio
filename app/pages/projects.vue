<script setup lang="ts">
const { data: page } = await useAsyncData(() =>
  queryCollection('pages')
    .path('/projects')
    .first()
)
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </article>
</template>