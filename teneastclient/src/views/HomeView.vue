<script setup>
    import Scroll from '../components/homeComponents/ImageScroll.vue'
    import router from '../router'
</script>

<template>
    <div class="w-full">
        <div class="bg-stone-950 w-full py-24">
            <div class="w-4/5 flex flex-col items-center m-auto">
                <img class="mb-24" height="70px" width="70px" src="../assets/key.svg"/>
                <h1 class="text-5xl text-center text-white tracking-wide mb-24">Where sophisticated investors access private markets.</h1>
                <h2 class="text-white text-center text-2xl mb-24">10 East is a membership-based investment firm focused on private market exposures for a select community of institutional and individual investors.</h2>
                <button @click="router.push('/onboarding')" class="text-black text-xl w-full bg-gradient-to-r from-gold to-gold cursor-pointer py-5 tracking-wide">Inquire</button>
            </div>
        </div>
        <div class="bg-black">
            <div class="w-4/5 bg-stone-900 py-10 px-5 m-auto">
                <h1 class="text-center text-white text-xl mb-24 w-3/5 m-auto">Our members include founders, partners, and portfolio managers from industry-leading investment firms.¹</h1>
                <div>
                    <Scroll direction="right"/>
                </div>
                <div>
                    <Scroll direction="left"/>
                </div>
            </div>
        </div>
    </div>
</template>
