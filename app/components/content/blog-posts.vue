<template>
    <slot :posts = "posts">
        <section class="not-prose font-mono">
            <div class="column text-gray-400 text-sm">
                <div>date</div>
                <div>title</div>
            </div>
            <ul>
                <li v-for="post in postsdata" :key="post.path">
                    <NuxtLink :to="post.path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div :class="{ 'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
                            {{ post.year }}
                        </div>
                        <div>
                            {{ post.title }}
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </slot>
</template>

<script setup>
const props = defineProps({
    limit: {
        type: Number,
        default: null
    }
})

const { data: posts } = await useAsyncData(
  'blog-list',
  () => {
    const query = queryCollection('blog')
    .where('path', '<>', '/blog')
    .select('path', 'title', 'publishedAt')
    .order('publishedAt', 'DESC')
    
    if (props.limit) {
      query.limit(props.limit)
    }
    
    return query.all()
  }
)

const postsdata = computed(() =>{
    if (!posts.value){ return []}

    const result = []
    let lastYear = null

    for (const post of posts.value) {
        const year = new Date(post.publishedAt).getFullYear()
    
        const displayYear = year !== lastYear
        post.year = year

        result.push(post)

        post.displayYear = displayYear
        lastYear = year
        }

    return result
})
</script>

<style scoped>
.column{
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>