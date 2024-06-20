<script setup lang='ts'>
import { Pic, Setting } from '@icon-park/vue-next'

</script>

<template>
  <div class="bg-gray-400 drag flex justify-between px-2 py-2 items-center">
    <span class=" text-gray-100 text-xs">壁纸助手</span>
    <div class="flex gap-2">
      <Pic class="cursor-pointer text-gray-200 nodrag" @click="$router.push({ name: 'home' })"></Pic>
      <Setting class="cursor-pointer text-gray-200 nodrag" @click="$router.push({ name: 'setting' })"></Setting>
    </div>
  </div>
</template>

<style scoped></style>
