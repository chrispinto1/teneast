<template>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="absolute -left-8 top-7 z-10 mt-3 w-72 overflow-hidden bg-charcoal shadow-lg ring-1 ring-gray-900/5">
            <div class="p-4 divide-y divide-solid border-silver">
                <slot/>
            </div>
        </PopoverPanel>
    </transition>
</template>

<script setup>
    import {
        PopoverPanel
    } from '@headlessui/vue'
</script>