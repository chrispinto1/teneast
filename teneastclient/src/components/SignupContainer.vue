<script setup>
  import { router } from '../router'
  import Step from '../components/signupComponents/Step.vue'
  import { signupStepStore } from '@/stores/signupStepStore.js'
  const signupStore = signupStepStore()
  function decrement(){
    if(signupStore.step === 1){
      router.push('/')
    }
    if(signupStore.step > 1){
      signupStore.step--
    }
  }
</script>

<template>
  <div class="flex flex-col w-[1325px]">
    <div class="grid grid-cols-3 h-24">
      <div class="flex items-center">
        <svg @click="decrement" xmlns="http://www.w3.org/2000/svg" class="size-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </div>      
      <h1 class="flex items-center justify-center text-slate-950 text-3xl font-bold">10 <span class=" ml-4 tracking-wide text-slate-950 text-3xl font-bold">EAST</span></h1>
    </div>
    <Step/>
    <div>
      <component :is="signupStore.stepsArray[signupStore.step - 1]"></component>
    </div>
  </div>
</template>