<script setup lang="ts">
import { fetchUrl } from '@renderer/request/index'
import { useConfig } from '@renderer/store/useConfig';
import { message } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const imageRef = ref<HTMLImageElement | null>(null)
const loading = ref(false)
const { config } = useConfig()

const load = async () => {
  loading.value = true;
  const res = await fetchUrl('http://localhost:3000')
  imageRef.value!.src = res;
  imageRef.value!.onload = () => {
    loading.value = false
  }
}

const router = useRouter()

const loadImages = async () => {
  load()
  // window.electron.ipcRenderer.send('setWallpaper', imageRef.value!.src, false)

}
onMounted(load)

const setWallpaper = async () => {
  const res = await window.api.checkHasDirectory(config.saveDirectory)
  if (res) {
    window.electron.ipcRenderer.send('setWallpaper', imageRef.value!.src, config.saveDirectory)
  } else {
    message.warning('下载目录不存在，请重新设置！')
    router.push({ name: 'setting' })
  }
}
const handleDownloadImage = async () => {
  // const res = await window.api.checkHasDirectory(config.saveDirectory)
  window.electron.ipcRenderer.send('downloadImage', imageRef.value!.src, config.saveDirectory)

  // if (res) {
  // } else {
  //   message.warning('下载目录不存在，请重新设置！')
  //   router.push({ name: 'setting' })
  // }
}

</script>

<template>
  <div>
    <img ref="imageRef" draggable="false" @click="loadImages" class="aspect-video">
    <div @click="setWallpaper"
      class="mx-2 box-border text-sm mt-2 text-center bg-slate-200 py-2 cursor-pointer rounded-md hover:bg-slate-50 duration-200 shadow-sm">
      <span class="text-gray-800">设置壁纸 </span>
    </div>
    <div class="mt-2 text-gray-600 fixed bottom-2 w-full  text-right ">
      <span class="px-2 py-2 text-xs  cursor-pointer" @click="handleDownloadImage">下载壁纸</span>
    </div>
  </div>
</template>

<style scoped></style>
