<script setup lang="ts">
import router from '@/router';
import { signupStepStore } from '@/stores/signupStepStore.js'
const signupData = signupStepStore()

function handleFinsihedSignup(){
    signupData.step = 1
    router.push('/')
}
</script>

<template>
    <div class="flex justify-center mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#059669" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="white" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
        </svg>
    </div>
    <div class="flex flex-col items-center">
        <h1 class="text-5xl text-black mb-10">Thank you. We are reviewing your application.</h1>
        <p class="text-lg text-black mb-10">A member of our team will contact you soon.</p>
        <p class="text-lg text-black mb-10">Thank you for your interest in 10 East.</p>
    </div>
    <button @click="handleFinsihedSignup" class="w-fit px-5 py-2 bg-yellow-600 rounded-lg text-white float-right">Bact to 10 East ></button>
</template>