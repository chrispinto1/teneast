import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import CompletedFormView from '../views/CompletedFormView.vue'
import LoginView from '../views/LoginView.vue'
import OfferingView from '../views/OfferingView.vue'
import HomeLoggedInView from '../views/HomeLoggedInView.vue'
import { routeChangeStore } from '@/stores/routeChangeStore.js'
import { userStore } from '@/stores/userStore.js'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomeView
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/offerings',
      name: 'offerings',
      component: OfferingView
    },
    {
      path: '/confirmation/:uuid',
      name: 'confirmation',
      component: CompletedFormView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeLoggedInView
    },
  ]
})

router.afterEach((to, from) => {
  const nonAuthRoutes = ['homepage', 'login', 'onboarding']
  const userStoreData = userStore()
  const userAuthenticated = false
  if(to.path != from.path){
    if(userAuthenticated && !nonAuthRoutes.includes(to.name)){
      router.push(to.path)
      return  
    }else if(nonAuthRoutes.includes(to.name)){
      router.push(to.path)
      return
    }else if(!userAuthenticated){
      router.push('/')
      return
    }
    router.push('/')
    return
  }
})

router.afterEach((to, from) => {
  const routeStore = routeChangeStore()
  if(["onboarding", 'login'].includes(to.name)){
    routeStore.includeNavBar = false
  }else if(!routeStore.includeNavBar){
    routeStore.includeNavBar = true
  }
  return true
})

export default router;