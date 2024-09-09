import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import CompletedFormVue from '../views/CompletedFormVue.vue'
import { routeChangeStore } from '@/stores/routeChangeStore.js'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignupView
    },
    {
      path: '/confirmation/:uuid',
      name: 'confirmation',
      component: CompletedFormVue
    }
  ]
})

router.afterEach((to, from) => {
  const routeStore = routeChangeStore()
  if(to.name === "onboarding"){
    routeStore.includeNavBar = false
  }else if(!routeStore.includeNavBar){
    routeStore.includeNavBar = true
  }
  return true
})

export default router;