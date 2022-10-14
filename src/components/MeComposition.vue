<script lang="ts" setup>
import Arrow from "./Arrow.vue";
import IconLink from "./IconLink.vue";
import Me from "./Me.vue";
import MeCard from "./MeCard.vue";
</script>

<template>
    <MeCard class="mb-8" />
    <Me />
    <div class="flex justify-center">
        <Arrow class="rotate-[150deg] h-28" />
        <p class="-rotate-12  -translate-x-8 translate-y-[3rem] font-parick-hand-SC max-h-3">Vist me on</p>
    </div>
    <div class="flex w-full gap-2 justify-center">
        <IconLink :icon="'fab fa-linkedin-in'" :link="'https://www.linkedin.com/in/alexander-eremeev-359317146'">
        </IconLink>
        <IconLink :icon="'fab fa-xing'" :link="'https://www.xing.com/profile/Alexander_Eremeev/'"></IconLink>
        <IconLink :icon="'fab fa-gitlab'" :link="'https://gitlab.com/aeremeev'"></IconLink>
        <IconLink :icon="'fab fa-github'" :link="'https://github.com/Zagibub'"></IconLink>
    </div>
</template>