<script setup lang="ts">

import {CheckCircleIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div v-if="true" class="flex items-center lg:order-2">
    <span class="mr-2">Day Complete!</span>
    <CheckCircleIcon class="h-7 text-green-500"/>
  </div>
  <div v-else class="flex items-center lg:order-2 gap-1">
    Progress: <span class="font-mono">20%</span>
    <div class="h-5 w-5 bg-red-500 rounded-full"></div>
  </div>
</template>

<style scoped>

</style>