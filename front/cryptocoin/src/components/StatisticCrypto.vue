<template>
    <section data-aos="fade-up" data-aos-once="true" class="max-w-screen-xl mx-2 sm:mx-auto mt-4 py-6 sm:py-6 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
      <div class="flex flex-col lg:flex-row">

        <!-- Top trending -->
        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="relative flex flex-col min-w-0 break-words bg-white w-full rounded xl:border-r border-gray-200">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">🔥 Top Trending</h3>
              </div>
              <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a v-if="this.$route.name != 'cryptocurrency'" href="/cryptocurrency"><button class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button></a>
              </div>
            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cryptostat in cryptostats.trending" class="text-sm">
                  <th class="border-b-0 hover:text-gray-800 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 text-left flex items-center text-blueGray-700">
                  <img :src="cryptostat.img" class="mr-2"/><a href="">{{ cryptostat.name }}</a></th>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 ">{{ cryptostat.price }}</td>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4"><i class="fas fa-arrow-up text-emerald-500 mr-4"></i>{{ cryptostat.stats }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top gainerss -->
        <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class="relative flex flex-col min-w-0 mt-20 sm:mt-0 break-words bg-white w-full rounded xl:border-r border-gray-200">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">🚀 Top Gainers</h3>
              </div>
              <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a v-if="this.$route.name != 'cryptocurrency'" href="/cryptocurrency"><button class="bg-blue-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button></a>
              </div>
            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cryptostat in cryptostats.gainers" class="text-sm">
                  <th class="border-b-0 hover:text-gray-800  px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 text-left flex items-center text-blueGray-700">
                  <img :src="cryptostat.img" class="mr-2"/><a href="">{{ cryptostat.name }}</a></th>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 ">{{ cryptostat.price }}</td>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4"><i class="fas fa-arrow-up text-emerald-500 mr-4"></i>{{ cryptostat.stats }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Recently Added -->
        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="relative flex flex-col min-w-0 mt-20 sm:mt-0 break-words bg-white w-full rounded ">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">💎 Recently Added</h3>
              </div>
              <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a v-if="this.$route.name != 'cryptocurrency'" href="/cryptocurrency"><button class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button></a>
              </div>
            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cryptostat in cryptostats.added" class="text-sm">
                  <th class="border-b-0 hover:text-gray-800  px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 text-left flex items-center text-blueGray-700">
                  <img :src="cryptostat.img" class="mr-2"/><a href="">{{ cryptostat.name }}</a></th>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4 ">{{ cryptostat.price }}</td>
                  <td class="border-b-0 px-6 align-middle border border-solid border-blueGray-100 border-l-0 border-r-0 whitespace-nowrap p-4"><i class="fas fa-arrow-down text-red-500 mr-4"></i>{{ cryptostat.stats }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </section>
</template>

<script setup>
  const cryptostats = {
    trending: [
      { name: 'Bitcoin', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/bitcoin.png'},
      { name: 'Ethereum', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/ethereum.png'},
      { name: 'Solana', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/solana.png'},
    ],
    gainers: [
      { name: 'Pappay', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/pappay.png'},
      { name: 'Bitcoin Asia', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/bitcoin-asia.png'},
      { name: 'MoonRock', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/moonrock.png'},
    ],
    added: [
      { name: 'Metacraft', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/metacraft.png'},
      { name: 'Frog', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/frog.png'},
      { name: 'Musk Doge', price: '$43180.13', stats: '46,53%', img: 'img/crypto-icon/musk-doge.png'},
    ],
  }
</script>