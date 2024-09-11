import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const userStore = defineStore('user', () => {
  // fetch the api for the user session
  const user = ref(null)
  let loggedIn = ref(false)
  const loginValuesObj = ref({})
  loginValuesObj['password'] = ref(''),
  loginValuesObj['email'] = ref('')
  let userToken = ref(null)
  
  const login = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.loginValuesObj)
    })
    .then(res => res.json())
    .then(res => {
      this.loginValuesObj = {}
      if(res.token){
        this.userToken = res.token
        router.push('/offerings')
      }
    })
    .catch(err => {
      console.error(err)
    })
  }

  async function isAuthenticated(){
    if(!this.userToken){
      const response = await getUserAuthToken()
      if(!response){
        return false
      }
      return false
    }
    return true
  }

  async function logout() {
    const loggedOut = await logoutUser(this.userToken)
    this.userToken = null
    this.loggedIn = false
    router.push('/')
  }

  async function getUserAuthToken() {
    const response = await authTokenFetch()
    if(response.token){
      this.userToken = response.token
      this.loggedIn = true
      this.user = response.user
      return true
    }
    return false
  }

  const logoutUser = (token) => {
    return new Promise((resolve, reject) => {
      fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + token
        }
      })
      .then(response => response.json())
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  const authTokenFetch = () => {
    return new Promise((resolve, reject) => {
      fetch('/api/get_auth_token')
      .then(response => {
        return response.json()
      })
      .then(response => {
          resolve(response)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  return { user, loggedIn, loginValuesObj, userToken, login, logout, getUserAuthToken, isAuthenticated }
})
