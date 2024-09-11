import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { userStore } from '@/stores/userStore.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

const userStoreData = userStore()
const userAuthenticated = await userStoreData.isAuthenticated()

app.use(router)
app.mount('#app')
