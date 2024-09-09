<script setup>
    const props = defineProps(['label', 'type'])
</script>

<template>
    <div class="flex flex-col mb-10 mr-10">
        <label class="mb-1 text-m text-slate-700 font-semibold">{{ label }}</label>
        <input :type="type" :class="label==='EMAIL' ? 'border border-slate-400 w-96 h-10 px-3' : 'border border-slate-400 w-72 h-10 px-3'">
    </div>
</template>