<script lang="ts" setup>
import { onMounted, reactive } from "vue";
const viewState = reactive({ mounted: false })

onMounted(() => {
  setTimeout(() => {
    viewState.mounted = true;
  }, 10)
})
</script>

<style>
:root {
  --s: 5;
  --h: 32;
  --speed: 1.5s;
}

.carousell-container {
  overflow: hidden;
  height: calc(var(--h) * 1px);
}

ul {
  display: flex;
  flex-direction: column;
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
  animation-delay: 2s;
}

ul li {
  width: 100%;
  animation: liMove calc(var(--speed)) infinite;
  animation-delay: 2s;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, calc(var(--s) * var(--h) * -1px));
  }
}

@keyframes liMove {
  0% {
    transform: translate(0, 0);
  }

  15%,
  100% {
    transform: translate(0, calc(var(--h) * -1px));
  }
}
</style>
<template>
  <div
    class="transition-all select-none rounded-lg bg-palette-300 p-4 outline-offset-4 outline-dashed outline-2 outline-palette-200">
    <div class="flex flex-col mb-2">
      <strong class="text-4xl">Hi.</strong>
      <strong class="text-4xl">My name is Alex.</strong>
    </div>
    <div class="max-w-fit">
      <div class="transition-all delay-100 duration-400 bg-palette-200 h-2"
        :class="[viewState.mounted? 'w-full':'w-0']"></div>
      <div class="overflow-hidden text-2xl flex gap-1">I do
        <div class="carousell-container">
          <ul>
            <li>software.</li>
            <li>Angular.</li>
            <li>React.</li>
            <li>Vue.</li>
            <li>TypeScript.</li>
            <li>software.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>