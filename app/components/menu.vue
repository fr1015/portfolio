<template>
    <nav class="font-mono">
        <ul class="flex flex-col md:flex-row md:space-x-4">
            <li>
                <NuxtLink to="/" class="link">Main Page</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="link">About Page</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" class="link">Projects Page</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="link">Blog Page</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .link{
        @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
    }
</style>