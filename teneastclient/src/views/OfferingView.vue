<script setup>
    import { userStore } from '@/stores/userStore.js'
    import { ref } from 'vue';
    const userStoreData = userStore()
    // fetch the offerings

    const results = await getOfferings().then(res => res)
    let offeringResults = ref(results.offerings)

    function getOfferings(){
        return new Promise((resolve, reject) => {
            fetch('/api/offerings_landing_page', {
                headers: {
                    'Authorization': 'Token ' + userStoreData.userToken
                }
            })
            .then(res => res.json())
            .then(response => {
                resolve(response)
            })
            .catch(err => console.error(err))
        })
    }

</script>
<template>
    <div class="bg-slate-700 px-24 py-24">
        <div class="flex w-[1320px] xl:8/12 lg:w-8/12 md:w-8/12 m-auto">
            <div class="pr-24">
                <h1 class="text-white text-3xl mb-5">{{ userStoreData.first_name}}, invest alongside our principals and partners.</h1>
                <p class="text-white text-lg">With 100+ years of collective experience, and a strategic network, we leverage our resources to vet and diligence each offering.</p>
            </div>
            <div class="bg-slate-800 p-5 text-center w-72">
                <p class="text-white text-xl mb-5">Consolidated return on historical investments 9</p>
                <div class="flex justify-between mb-5">
                    <p class="text-white flex flex-col"><span class="text-yellow-600 text-3xl">21.0%</span> Net IRR10</p>
                    <p class="text-white flex flex-col"><span class="text-yellow-600 text-3xl">1.70x</span> Net MOIC</p>
                </div>
                <p class="text-slate-600"> as of 12/31/23</p>
            </div>
        </div>
    </div>
    <div class="h-10 flex items-center bg-slate-200">
        <div class="flex w-[1320px] xl:8/12 lg:w-8/12 md:w-8/12 m-auto items-center">
            <svg class="w-4 h-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323" style="enable-background:new 0 0 28.314 28.323" xml:space="preserve"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/></svg>
            <p class="">Schedule a call</p>
        </div>
    </div>
    <div class="flex flex-col w-[1320px] xl:8/12 lg:w-8/12 md:w-8/12 m-auto">
        <div class="flex justify-between w-full items-center pt-10 pb-5 border-b border-slate-200">
            <h1 class="text-4xl">Current Offerings</h1>
            <a class="text-amber-600">See all offerings</a>
        </div>
        <template v-for="investment in offeringResults">
            <div class="border border-slate-200 mt-10 rounded-md">
                <div class="py-4 px-4">
                    <div class="flex">
                        <div class="w-2/6 border-r border-slate-200 flex flex-col justify-between">
                            <div>
                                <h1 class="text-xl mb-5">{{ investment.name }}</h1>
                                <template v-for="tag in investment.tags">
                                    <span class="rounded-lg bg-slate-500 text-white py-1 px-2 text-sm font-semibold">{{ tag.toUpperCase() }} </span>
                                </template>
                            </div>
                            <p class="font-semibold">{{ investment.status}}</p>
                        </div>
                        <div class="w-4/6 px-5">
                            <p class="mb-5">{{ investment.overview }}</p>
                            <div>
                                <div class="flex items-center justify-between border-b border-slate-200 pb-3">
                                    <p class="text-lg">Estimated Term</p>
                                    <p class="float-left">{{ investment.estimated_term }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-black flex items-center justify-between px-10 py-5">
                    <a class="text-white text=x;">Fund Investment</a>
                    <div class="flex">
                        <button class="bg-black text-white px-4 py-2">View Details</button>
                        <button class="bg-amber-600 text-white ml-4 px-4 py-2">Request Allocation</button>
                    </div>
                </div>
            </div>
        </template>
        <!-- loop through two offerings  -->
    </div>
</template>