<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
    <Navbar />
    <Suspense>
        <RouterView />
    </Suspense>
</template>
