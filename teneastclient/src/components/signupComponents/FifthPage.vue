<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="Are you a Qualified Client?"
        :options="[
            'You have at least $1.1M under management by 10 East.', 
            'You have a net worth (individually or jointly with your spouse) of more than $2.2M, excluding your primary residence.', 
            'You invest on behalf of a company that meets any of the foregoing tests.', 
            'I am not a Qualified Client']"
        optionType="checkbox"
    />
</template>