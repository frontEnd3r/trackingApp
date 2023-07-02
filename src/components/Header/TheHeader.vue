<script setup lang="ts">
import TheHeaderProgress from "@/components/Header/TheHeaderProgress.vue";
import TheHeaderNav from "@/components/Header/TheHeaderNav.vue";
import Logo from "@/components/Utility/Logo.vue";
</script>

<template>
  <header>
    <div class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <logo/>
        <the-header-progress/>
        <the-header-nav/>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>