<template>
    <a :href="link ? link : null" class="text-lg leading-6 text-white font-amiri">
        {{ sectionName }}
    </a>
</template>

<script setup>
    const props = defineProps(['sectionName', 'link'])
</script>