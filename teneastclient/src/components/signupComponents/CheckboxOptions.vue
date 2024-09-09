<script setup>
    const props = defineProps(['options', 'optionType'])
    import CheckboxOption from './CheckboxOption.vue';

</script>
<template>
    <div class="flex flex-col w-[870px]">
        <CheckboxOption v-for="(option, index) in options" :optionText="option" :index="index" :optionsLength="options.length" :optionType="optionType"/>
    </div>
</template>