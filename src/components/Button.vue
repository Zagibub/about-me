<script lang="ts" setup>

const props = defineProps({
    label: { type: String, require: true },
})
</script>
<template>
    <button
        class="h-10 rounded-lg transition duration-300 bg-palette-300 hover:bg-palette-200 hover:text-palette-400 hover:outline-offset-2 hover:outline-dashed  hover:outline-2  hover:outline-palette-200 focus:outline-offset-2 focus:outline-dashed  focus:outline-2  focus:outline-palette-200 focus:bg-palette-200 focus:text-palette-400">
        {{props.label}}
    </button>
</template>