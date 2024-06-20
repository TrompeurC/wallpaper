import { createRouter, createWebHistory } from "vue-router";

import Home from '@renderer/views/Home.vue'
import Setting from "@renderer/views/Setting.vue";

export default createRouter({
  history: createWebHistory(import.meta.url),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'setting',
      path: '/setting',
      component: Setting
    }
  ]
})
