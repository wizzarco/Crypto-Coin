<template>
    <!-- Background du haut -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
            </defs>
        </svg>
    </div>

    <!-- Navbar -->
    <div class="px-6 pt-6 lg:px-8 z-50">
        <div>
            <nav class="flex h-9 items-center justify-between" aria-label="Global">
                <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                    <a href="/" class="-m-1.5 p-1.5">
                        <img class="h-12" src="/img/logo/logotype_sf_bleu.png" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-semibold text-sm text-gray-900 hover:text-gray-900">{{ item.name }}</a>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <a v-if="this.$route.name != 'login' && this.$route.name != 'signup' && this.$route.name != 'profile'" href="/login" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Login</a>
                    <div v-if="this.$route.name != 'login' && this.$route.name != 'signup' && this.$route.name != 'profile'" class="ml-2">
                        <a href="/signup" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-gradient-to-r from-[#468ef9] to-[#0c66ee]">Signup</a>
                    </div>

                    <div v-if="this.$route.name != 'home' && this.$route.name != 'login' && this.$route.name != 'signup' && this.$route.name != 'home' && this.$route.name != 'exchanges' && this.$route.name != 'announcing' && this.$route.name != 'faq' && this.$route.name != 'contact' && this.$route.name != 'cryptocurrency' && this.$route.name != 'error'" class="flex items-center lg:order-2">
                        <!-- FAQ -->
                        <a href="/faq"><button type="button" data-tooltip-target="tooltip-faq" class="hidden p-2 text-gray-500 rounded-lg lg:inline-block hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        </button></a>

                        <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline"></span>

                        <!-- Logout -->
                        <a href="/"><button type="button" data-tooltip-target="tooltip-faq" class="hidden p-2 text-gray-500 rounded-lg lg:inline-block hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </button></a>

                        <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline"></span>

                        <!-- User menu -->
                        <button type="button" class="mb-1 flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg">
                        </button>
                        <span class="hidden items-center p-2 pr-3 pl-4 text-gray-500 lg:inline-flex">
                            Stortz Loïc
                        </span>
                        <!-- Dropdown -->
                        <div class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                            <div class="py-3 px-4">
                                <span class="block text-sm font-semibold text-gray-900 dark:text-white">Stortz Loïc</span>
                                <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400">loic.stortz@epitech.eu</span>
                            </div>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a href="/profile" class="block flex py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-5 h-5 text-gray-400"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg> My profile</a>
                                </li>
                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a href="/favorite" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> Crypto likes</a>
                                </li>
                                
                            </ul>
                        </div>

                        <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu" class="items-center p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div class="flex h-9 items-center justify-between">
                        <div class="flex">
                            <a href="#" class="-m-1.5 p-1.5">
                            <img class="h-12" src="/img/logo/logotype_sf_bleu.png" />
                            </a>
                        </div>
                        <div class="flex">
                            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{ item.name }}</a>
                            </div>
                            <div class="py-6">
                                <a href="/login" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Login</a>
                                <a href="/signup" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Signup</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cryptocurrency', href: '/cryptocurrency' },
    { name: 'Exchanges', href: '/exchanges' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Announcing', href: '/announcing' },
  ]
  
  const mobileMenuOpen = ref(false)
</script>