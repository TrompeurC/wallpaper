<script setup lang="ts">
import NavHeader from './components/NavHeader.vue';


</script>

<template>
  <main class="w-screen h-screen bg-gray-300 flex flex-col">
    <NavHeader></NavHeader>
    <RouterView #default="{ Component }">
      <component :is="Component" class="flex-1"></component>
    </RouterView>
  </main>
</template>

<style scoped></style>
