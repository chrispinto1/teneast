<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="Have you invested in the following areas in the past?"
        :options="[
            'Private companies and/or startups', 
            'Hedge funds', 
            'Private equity funds', 
            'Venture capital funds',
            'Venture capital funds',
            'Real estate, real estate securities and/or real estate funds',
            'Private credit/direct lending and/or private credit funds',
            'None of the above']"
        optionType="checkbox"
    />
</template>