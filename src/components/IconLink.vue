<script lang="ts" setup>

const props = defineProps({
    link: { type: String, require: true },
    icon: { type: String, require: true }
})
</script>
<template>
    <a class="flex justify-center items-center h-10 w-10 rounded-lg transition duration-300 bg-palette-300 hover:outline-offset-2 hover:outline-dashed  hover:outline-2  hover:outline-palette-200"
        :href=props.link><i :class=props.icon></i></a>
</template>