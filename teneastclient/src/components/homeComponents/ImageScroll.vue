<script setup>
    const props = defineProps(['direction'])
</script>

<template>
    <div class="h-24">
        <p class="text-center text-white">Scroll {{ direction }}</p>
    </div>
</template>