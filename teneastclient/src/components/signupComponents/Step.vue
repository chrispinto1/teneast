<script setup>
    import { signupStepStore } from '@/stores/signupStepStore.js'
    const signupStore = signupStepStore()
</script>
<template>
    <p class="flex items-center justify-center text-zinc-400 h-24 text-3xl">Step 
        <template v-if="signupStore.step === 1">
            {{ signupStore.step }}
        </template>
        <template v-else>
            {{ signupStore.step }} of {{ signupStore.steps }}
        </template>
    </p>
</template>