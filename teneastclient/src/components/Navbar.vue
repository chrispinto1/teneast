<template>
  <template v-if="routeStore.includeNavBar">
    <header class="bg-charcoal">
      <nav class="max-w-[1536px] mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center">
            <div @click="router.push('/', null, { shallow: true })" class="pr-8 cursor-pointer">
              <img class="h-8 w-28" src="../assets/logo.svg" alt="" />
            </div>
            <template v-if="userStoreData.loggedIn">
              <div>
                <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                    <HeaderSectionName sectionName="Offerings"/>
                    <DropdownContainer sectionName="Investment Process" :dropdownOptions="['Investment Philosophy', 'Sourcing and Due Diligence', 'Track Record']"/>
                    <DropdownContainer sectionName="Community" :dropdownOptions="['Events', 'Members Concierge']"/>
                    <HeaderSectionName sectionName="Insights"/>
                    <DropdownContainer sectionName="Our Story" :dropdownOptions="['About', 'Team', 'How it works', 'Member Benefit', 'FAQ']"/>
                </PopoverGroup>
              </div>
            </template>
          </div>
          <template v-if="!userStoreData.loggedIn">
            <div class="hidden lg:flex">
              <div class="border-yellow-600 border-dotted border px-2 py-1  mr-4">
                <button class="px-2 py-1 flex items-center justify-center bg-gradient-to-r from-gold to-gold text-xl" @click="router.push('onboarding')">Inquire</button>
              </div>
              <div class="flex lg:justify-end items-center">
                <a href="#" class="text-sm font-semibold leading-6 text-white" @click="router.push('/login')">Log in</a>
              </div>
            </div>
          </template>
          <template v-if="userStoreData.loggedIn">
            <div class="hidden lg:flex items-center relative">
              <HeaderSectionName sectionName="Invite a Member"/>
              <PopoverGroup>
                <Popover>
                  <PopoverButton>
                    <svg  @click="loggedInModal = true" class="ml-6 cursor-pointer outline-none border-none" fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 45.532 45.532"xml:space="preserve"><g><path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765,S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53,c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012,c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592,c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/></g></svg>
                  </PopoverButton>
                  <ProfileOptions />
                </Popover>
              </PopoverGroup>
            </div>
          </template>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <!-- <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> -->
    </header>
  </template>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup, PopoverButton, Popover } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  import DropdownContainer from './navbarComponents/DropdownContainer.vue'
  import HeaderSectionName from './navbarComponents/HeaderSectionName.vue'
  import ProfileOptions from './navbarComponents/ProfileOptions.vue'
  import { userStore } from '@/stores/userStore.js'
  import { routeChangeStore } from '@/stores/routeChangeStore.js'
  import router from '../router'
  const userStoreData = userStore()
  const routeStore = routeChangeStore()
  
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  const loggedInModal = ref(false)
  </script>