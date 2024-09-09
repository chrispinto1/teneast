<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="What is your typical investment amount in a private market opportunity?"
        :options="[
            'More than $5,000,000', 
            '$3,000,000 - $5,000,000', 
            '$1,000,000 - $3,000,000', 
            '$250,000 - $1,000,000',
            '$100,000 - $250,000',
            'Less than $50,000']"
        optionType="radio"
    />
</template>