<script setup lang="ts">
import {inject} from "vue";
const navItems = inject('navItems')
</script>

<template>
  <nav class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li v-for="(icon, page) in navItems" :key="page">
        <a href="#"
           class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 capitalize hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>