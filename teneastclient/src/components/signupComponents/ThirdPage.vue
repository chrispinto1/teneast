<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="Are you an accredited investor?"
        :options="['Your annual income is greater than $200k (for the last two years).', 'Your household income (jointly with your spouse, if married) is greater than $300k (for the last two years).', 'Your net worth is greater than $1M (excluding your primary residence).', 'You are a holder in good standing of a Series 7, Series 65 or Series 82 license.', 'I am not an Accredited Investor']"
        optionType="checkbox"
    />
</template>