<script setup>
    import Input from '../signupFormComponents/Input.vue'
    import { signupStepStore } from '@/stores/signupStepStore.js'
    
    const signupStore = signupStepStore()
</script>
<template>
    <form>
        <h1 class="text-4xl font-semibold mb-8">Let us know how to contact you.</h1>
        <Input type="text" label="FIRM NAME" userDataType="firmName"/>
        <div class="flex">
            <Input type="text" label="FIRST NAME" userDataType="firstName"/>
            <Input type="text" label="LAST NAME" userDataType="lastName"/>
        </div>
        <Input type="text" label="EMAIL" userDataType="email"/>
        <Input type="text" label="PHONE NUMBER" userDataType="phoneNumber"/>
        <Input type="text" label="COUNTRY OF RESIDENCE" userDataType="countryOfResidence"/>
        <h1 class="text-3xl font-semibold mb-8">Create a password for your account</h1>
        <div class="flex">
            <Input type="password" label="PASSWORD" userDataType="password"/>
            <Input type="password" label="CONFIRM PASSWORD" userDataType="confirmPassword"/>
        </div>
        <div class="flex mb-8">
            <input type="checkbox" class="mr-4">
            <p>I agree to 10 East's <span class="text-amber-600">Non-Disclosure Agreement</span>, <span class="text-amber-600">Terms of Use</span>, and <span class="text-amber-600">Privacy Policy</span>.</p>
        </div>
        <button @click="(event) => signupStore.$signup(event)" class="rounded-lg bg-yellow-600 py-3 px-6 text-white" type="submit">Next</button>
    </form>
</template>