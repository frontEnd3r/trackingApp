<script setup lang="ts">
import {inject, ref} from "vue";
import MobileNavItem from "@/components/Header/MobileNavItem.vue";

const navItems: MobileNavItem = inject('navItems')
const currentPage: string = ref(window.location.hash.slice(1))
</script>

<template>
  <nav class="sticky bottom-0 z-50 bg-white lg:hidden">
    <ul class="flex items-center justify-around border-t">
      <mobile-nav-item
          v-for="(icon, page) in navItems"
          :key="page"
          :href="`#${page}`"
          :class="{'bg-gray-200 pointer-events-none': page === currentPage}"
          @click="currentPage = page">
        <component class="h-6 w-6" :is="icon"/>
        {{ page }}
      </mobile-nav-item>
    </ul>
  </nav>
</template>

<style scoped>

</style>