<template>
    <div class="flex items-center space-x-2">
        <div class="text-xs text-gray-500" v-if="showNextMode">Change to {{ nextMode }}</div>
        <button @click="toggleMode" @mouseenter="showNextMode = true" @mouseleave="showNextMode = false" class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base">
            {{ nextModeIcon }}
        </button>
    </div>
</template>

<script setup>
const showNextMode = ref(false)
const colorMode = useColorMode()
const modes = ['light', 'dark', 'system']
const nextModeIcons = {
    light: '☀️',
    dark: '🌙',
    system: '💻',
}
const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if (currentModeIndex === modes.length - 1) {
        nextModeIndex = 0
    } else {
        nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
})

const nextModeIcon = computed(() => {
    return nextModeIcons[nextMode.value]
})

const toggleMode = () => {
    colorMode.preference = nextMode.value
}
</script>