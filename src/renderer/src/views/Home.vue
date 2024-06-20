<script setup lang="ts">
import { fetchUrl } from '@renderer/request/index'
import { onMounted, ref } from 'vue';

const imageRef = ref<HTMLImageElement | null>(null)
const loading = ref(false)

const loadImages = async () => {
  loading.value = true;
  const res = await fetchUrl('http://localhost:3000')
  imageRef.value!.src = res;
  imageRef.value!.onload = () => {
    loading.value = false
  }
  window.electron.ipcRenderer.send('setBackgroundImage', imageRef.value!.src)

}
onMounted(loadImages)

const setBackgroundImage = () => {
  window.electron.ipcRenderer.send('setBackgroundImage', imageRef.value!.src, true)
}

</script>

<template>
  <div>
    <img ref="imageRef" draggable="false" @click="loadImages" class="aspect-video">
    <div @click="setBackgroundImage"
      class="mx-2 box-border text-sm mt-2 text-center bg-slate-200 py-2 cursor-pointer rounded-md hover:bg-slate-50 duration-200 shadow-sm">
      <span class="text-gray-800">设置壁纸 </span>
    </div>
    <div class="mt-2 text-gray-600 fixed bottom-2 w-full  text-right ">
      <span class="px-2 py-2 text-xs  cursor-pointer">下载壁纸</span>
    </div>
  </div>
</template>

<style scoped></style>
