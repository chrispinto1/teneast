<script setup>
    import router from '../router'
    import { userStore } from '@/stores/userStore.js'
    const userStoreData = userStore()
</script>

<template>
    <div class="h-screen bg-slate-50">
        <div class="w-[1450px] flex flex-col items-center m-auto ">
            <div class="w-full">
                <svg @click="router.push('/')" xmlns="http://www.w3.org/2000/svg" class="size-6 cursor-pointer h-24 mb-24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>
            <div class="shadow flex flex-col items-center justify-center py-10 px-10 w-[495px]">
                <p class="mb-10 text-5xl">10</p>
                <h1 class="mb-10 text-3xl font-semibold">Sign In</h1>
                <form @submit.prevent="(event) => userStoreData.login()" class="flex flex-col mb-5">
                    <label class="mb-1 text-m text-slate-700 font-semibold">EMAIL</label>
                    <input @input="(event) => userStoreData.loginValuesObj['email'] = event.target.value" class="border border-slate-400 w-72 h-10 px-3 mb-5" type="text">
                    <label class="mb-1 text-m text-slate-700 font-semibold">PASSWORD</label>
                    <input @input="(event) => userStoreData.loginValuesObj['password'] = event.target.value" class="border border-slate-400 w-72 h-10 px-3" type="password">
                    <button class="py-2" type="submit">Sign In</button>
                </form>
                <p class="mb-5 text-amber-600 cursor-pointer">Forgot your password?</p>
                <p class="mb-5">Don't have an account? <span @click="router.push('/onboarding')" class="text-amber-600 cursor-pointer">Request Access</span></p>
            </div>
        </div>
    </div>
</template>