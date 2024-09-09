<script setup>
    import Input from '../signupFormComponents/Input.vue'
</script>
<template>
    <h1 class="text-4xl font-semibold mb-8">Let us know how to contact you.</h1>
    <Input type="text" label="FIRM NAME"/>
    <div class="flex">
        <Input type="text" label="FIRST NAME"/>
        <Input type="text" label="LAST NAME"/>
    </div>
    <Input type="text" label="EMAIL"/>
    <Input type="text" label="PHONE NUMBER"/>
    <Input type="text" label="COUNTRY OF RESIDENCE"/>
    <h1 class="text-3xl font-semibold mb-8">Create a password for your account</h1>
    <div class="flex">
        <Input type="password" label="PASSWORD"/>
        <Input type="password" label="CONFIRM PASSWORD"/>
    </div>
    <div class="flex mb-8">
        <input type="checkbox" class="mr-4">
        <p>I agree to 10 East's <span class="text-amber-600">Non-Disclosure Agreement</span>, <span class="text-amber-600">Terms of Use</span>, and <span class="text-amber-600">Privacy Policy</span>.</p>
    </div>
    <button class="rounded-lg bg-yellow-600 py-3 px-6 text-white">Next</button>
</template>