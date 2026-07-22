<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(
  route.path,
  () =>
    queryCollection('blog')
      .path(route.path)
      .first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
  })
}

const activeId = ref(null)

onMounted(() => {
  const callback = (entries) => {
    for ( const entry of entries){
      if (entry.isIntersecting){
        activeId.value = entry.target.id
        break;
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3')

  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})

</script>

<template>
  <article
    class="prose dark:prose-invert max-w-none
           prose-pre:bg-white
           dark:prose-pre:bg-gray-800
           prose-pre:text-gray-700
           dark:prose-pre:text-gray-300"
  >
    <div class="grid grid-cols-6 gap-16">

      <div
        :class="{
          'col-span-6 md:col-span-4': page?.body?.toc?.links?.length,
          'col-span-6': !page?.body?.toc?.links?.length
        }"
      >
        <ContentRenderer :value="page" />
      </div>

      <div
        v-if="page?.body?.toc?.links?.length"
        class="hidden md:block md:col-span-2 not-prose"
      >
        <aside class="sticky top-8">
          <div class="font-semibold mb-2">
            Table of Contents
          </div>

          <nav>
            <TocLinks :links="page.body.toc.links" :active-id="activeId" />
          </nav>
        </aside>
      </div>
    </div>
  </article>
</template>