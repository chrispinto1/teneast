<script setup>
    const props = defineProps(['optionText', 'index', 'optionsLength', 'optionType'])

</script>
<template>
    <div :class="index + 1 === optionsLength ? 'flex w-[870px] justify-between mb-10 border-slate-600 pb-5' : 'flex w-[870px] justify-between mb-10 border-slate-600 border-b pb-5'">
        <p>{{ optionText }}</p>
        <input :type="optionType"/>
    </div>
</template>