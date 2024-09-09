<script setup>
    import router from '@/router';
    import Card from '../Card.vue'
    const props = defineProps(['step'])
</script>

<template>
    <h1 class="flex items-center justify-center text-4xl font-medium h-24 mb-5">What type of investor are you?</h1>
    <div class="grid grid-cols-3 mb-10">
        <Card type="Individual" description="I would like to invest on behalf of myself, my family, or my company."/>
        <Card type="Institutional" description="I would like to invest on behalf of an institution or advisory clients (endowments, pensions, RIAs, etc."/>
        <Card type="Individual & Institutional" description="I would like to invest on behalf of myself and as an institutional investor or for my advisory clients."/>
    </div>
    <div class="flex flex-col items-center justify-center">
        <p >Already a member?</p>
        <button class="w-fit text-amber-600" @click="router.push('/login')">Sign in</button>
    </div>
</template>