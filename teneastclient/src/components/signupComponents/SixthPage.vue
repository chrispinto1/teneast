<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="What is your current net worth (jointly with your spouse, if married)?"
        subheaderText="To be eligible for 10 East membership consideration, you must meet one or more SEC Qualified Client criteria."
        :options="[
            'Greater than $100,000,000', 
            'Between $50,000,000 and $100,000,000.', 
            'Between $25,000,000 and $50,000,000', 
            'Between $10,000,000 and $25,000,000',
            'Between $5,000,000 and $10,000,000',
            'Less than $5,000,000']"
        optionType="radio"
    />
</template>