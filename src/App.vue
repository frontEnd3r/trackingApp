<script setup lang="ts">
import TheHeader from "@/components/Header/TheHeader.vue";
import TheMobileNav from "@/components/Header/TheMobileNav.vue";
import provideGlobals from "@/globalVariables";
provideGlobals()

</script>

<template>
  <the-header/>
  <main class="flex flex-grow flex-col"></main>
  <the-mobile-nav/>
</template>

<style scoped>

</style>
