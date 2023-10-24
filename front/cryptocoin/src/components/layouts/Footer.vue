<template>
    <footer class="bg-white shadow-inner">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <img class="h-16" src="/img/logo/banner.png" />
            <p class="text-base text-gray-500">Consult CryptoCoin and follow live the price of the main cryptocurrencies. Evolution over 24 hours, volumes, capitalization, evolution of euro/dollar prices in real time.</p>
            <div class="flex space-x-6">
              <a v-for="item in navigation.social" :key="item.name" :href="item.href" target="_blank" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-base font-medium text-gray-900">Pages</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.pages" :key="item.name">
                    <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.support" :key="item.name">
                    <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-gray-900">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8 text-center">
          <p class="text-base text-gray-400">&copy; 2023 Crypto Coin, Inc. All rights reserved.</p>
          <a href="https://wizzarco.com" target="_blank" class="text-base text-gray-400 hover:text-sky-600 hover:underline">Design and created by WizzarCo.</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  const navigation = {
    pages: [
      { name: 'Cryptocurrency', href: '/cryptocurrency' },
      { name: 'Exchanges', href: '/exchanges' },
      { name: 'Announcing', href: '/announcing' },
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/wizzarco/Crypto-Coin',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
        }),
      },
    ],
  }
  </script>