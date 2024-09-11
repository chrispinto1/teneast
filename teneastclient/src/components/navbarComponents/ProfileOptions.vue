<script setup>
  import { DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverPanel} from '@headlessui/vue'
  import { userStore } from '@/stores/userStore.js'
  const userStoreData = userStore()
</script>

<template>
    <div class="fixed right-0 absolute w-fit h-fit">
        <PopoverPanel class=" overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="border-b pb-3">
                <p>Account</p>
                <h2 class="font-bold">UAT Member</h2>
                <p>{{ userStoreData.user.email }}</p>
            </div>
            <div class="border-b pb-3 pt-4">
                <p>Your Profiles</p>
                <h2 class="font-bold">UAT Member</h2>
                <p>+ Add Profile</p>
            </div>
            <div class="border-b pb-3 pt-4">
                <p>Account Overview</p>
                <p>Membership</p>
                <p>Investment Profiles</p>
                <p>Portfolio</p>
                <p>Documents</p>
            </div>
            <div class="border-b pb-3 pt-4">
                <p>Invite a Member</p>
            </div>
            <div class="pt-4">
                <p class="cursor-pointer" @click="userStoreData.logout">Sign Out</p>
            </div>
        </PopoverPanel>
    </div>
</template>