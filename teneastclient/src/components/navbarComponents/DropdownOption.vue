<template :key="name">
    <a class="block font-semibold text-white hover:text-yellow-gold py-4 cursor-pointer">
        {{ text }}
    </a>
</template>

<script setup>
    const props = defineProps(['text', 'name'])
</script>