<script setup>
    import { userStore } from '@/stores/userStore.js'
    const userStoreData = userStore()
</script>
<template>
    <div class="bg-slate-700 px-24 py-24 flex">
        <div class="pr-24">
            <h1 class="text-white text-3xl mb-5">{{ userStoreData.first_name}}, invest alongside our principals and partners.</h1>
            <p class="text-white text-lg">With 100+ years of collective experience, and a strategic network, we leverage our resources to vet and diligence each offering.</p>
        </div>
        <div class="bg-slate-800 p-5 text-center w-72">
            <p class="text-white text-xl mb-5">Consolidated return on historical investments 9</p>
            <div class="flex justify-between mb-5">
                <p class="text-white flex flex-col"><span class="text-yellow-600 text-2xl">21.0%</span> Net IRR10</p>
                <p class="text-white flex flex-col"><span class="text-yellow-600 text-2xl">1.70x</span> Net MOIC</p>
            </div>
            <p class="text-slate-600"> as of 12/31/23</p>
        </div>
    </div>
</template>