<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
const state = reactive({ visible: false })

const toggleVisibility = () => state.visible = !state.visible

onMounted(() => {
  setTimeout(() => toggleVisibility(), 700)
});

</script>

<template>
  <Transition enter-active-class="duration-300 ease-out transform" enter-from-class="opacity-0 translate-y-36"
    enter-to-class="opacity-100 translate-y-0">
    <div v-if="state.visible" class="w-full h-full flex items-center justify-center">
      <div class="w-80">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

