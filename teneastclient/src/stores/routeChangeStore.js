import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const routeChangeStore = defineStore('routeChange', () => {
  const includeNavBar = ref(true)

  return { includeNavBar }
})
