<script setup>
    import { signupStepStore } from '@/stores/signupStepStore.js'
    import CheckboxOptions from './CheckboxOptions.vue'
    const props = defineProps(['headerText', 'options', 'optionType'])
    
    const signupStore = signupStepStore()
</script>
<template>
    <h1 class="font-semibold text-4xl mb-3">{{ headerText }}</h1>
    <p class="mb-16">To be eligible for 10 East membership consideration, you must meet one or more <span class="text-amber-600">SEC Accredited Investor criteria.</span></p>
    <template v-if="optionType === 'checkbox'">
        <p class="text-lg text-slate-800 mb-10">Select all that apply</p>
    </template>
    <template v-else>
        <p class="text-lg text-slate-800 mb-10">Select one</p>
    </template>
    <CheckboxOptions :options="options" :optionType="optionType"/>
    <button @click="() => signupStore.step++" class="rounded-lg bg-yellow-600 py-3 px-6 text-white" type="submit">Next</button>
</template>