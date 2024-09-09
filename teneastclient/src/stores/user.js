import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // fetch the api for the user session
  const user = ref(null)
  const loggedIn = false

  return { user, loggedIn }
})
