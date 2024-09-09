<script setup>
    const props = defineProps(['type', 'description', 'step'])
    import { signupStepStore } from '@/stores/signupStepStore.js'
    const signupStore = signupStepStore()
</script>
<template>
    <div class="w-11/12 p-5 shadow hover:border hover:cursor-pointer hover:border-yellow-400" @click="signupStore.step++">
        <h1 class="w-5/6 m-auto text-xl text-center pb-5 border-b-2 border-slate-200 mb-5" @click="signupStore.typeOfInvestor=type">{{ type }}</h1>
        <p class="text-center">{{ description }}</p>
    </div>
</template>