<script setup lang="ts">
import {inject} from "vue";

const navItems = inject('navItems')
</script>

<template>
  <nav class="sticky bottom-0 z-50 bg-white lg:hidden">
    <ul class="flex items-center justify-around border-t">
      <li v-for="(icon, page) in navItems" class="flex-1" :key="page">
        <a :href="`#${page}`" class="flex flex-col justify-center items-center p-2 text-xs capitalize">
          <component class="h-6 w-6" :is="icon"/>
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>