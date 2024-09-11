<template>
    <Popover class="relative">
        <PopoverButton class="outline-none flex items-center gap-x-1 text-lg leading-6 text-white xs:text-xl font-amiri">
            <HeaderSectionName :sectionName="sectionName"/>
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </PopoverButton>
        <Dropdown>
            <template v-for="item in dropdownOptions" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                <DropdownOption :name="item" :text="item"/>
            </template>
        </Dropdown>
    </Popover>
</template>

<script setup>
    import {
    Popover,
    PopoverButton,
    } from '@headlessui/vue'
    import Dropdown from './Dropdown.vue'
    import DropdownOption from './DropdownOption.vue'
    import HeaderSectionName from './HeaderSectionName.vue'
    import { ChevronDownIcon } from '@heroicons/vue/20/solid'
    const props = defineProps(['dropdownOptions', 'sectionName'])
</script>