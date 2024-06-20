<script setup lang="ts">
import NavHeader from './components/NavHeader.vue';


</script>

<template>
  <main class="w-screen h-screen bg-gray-300">
    <NavHeader></NavHeader>
    <RouterView #default="{ Component }">
      <component :is="Component"></component>
    </RouterView>
  </main>
</template>

<style scoped></style>
