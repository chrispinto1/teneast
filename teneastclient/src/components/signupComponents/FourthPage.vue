<script setup>
    import OptionsContainer from './OptionsContainer.vue';
</script>

<template> 
    <OptionsContainer 
        headerText="Are you a Qualified Purchaser?"
        :options="[
            'You (individually or jointly with your spouse) own at least $5M in investments.', 
            'You invest on behalf of a family investment entity with at least $5M in investments.', 
            'You invest at least $25M on a discretionary basis on behalf of yourself or other qualified purchasers.', 
            'I am not a Qualified Purchaser']"
        optionType="checkbox"
    />
</template>