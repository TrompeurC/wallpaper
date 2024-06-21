import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfig = defineStore('config', () => {
  const config = ref({
    saveDirectory: ''
  })
  return {
    config
  }
}, {
  persist: true
})
