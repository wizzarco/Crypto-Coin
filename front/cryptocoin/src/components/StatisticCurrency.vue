<template>
    <div data-aos="zoom-in" data-aos-delay="200" data-aos-once="true" class="max-w-8xl mx-auto bg-white shadow-lg relative z-20 mt-8 hidden md:block">

        <!-- Tables of the best cryptocurrency -->
        <div class="mb-12 xl:mb-0 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">Watchlist</h3>
                    </div>
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button class="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" type="button">Cryptocurrency</button>
                    </div>
                </div>
                </div>

                <div class="block w-full overflow-x-auto">
                    <table class="items-center bg-transparent w-full border-collapse ">
                        <!-- Ce que contient la tables des cryptocurrency -->
                        <thead>
                            <tr>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">#</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">1h %</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">24h %</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">7d %</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Market cap</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Volume (24h)</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Circulating Supply</th>
                                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Volume Graph (7d)</th>
                            </tr>
                        </thead>

                        <!-- Contents de la table -->
                        <tbody>
                            <tr v-for="cryptocurrency in cryptocurrencies" class="hover:bg-gray-100">
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ cryptocurrency.rank }}</td>
                                <th class="border-t-0 px-6 align-middle border border-solid border-blueGray-100 text-sm border-l-0 border-r-0 whitespace-nowrap p-4 text-left flex items-center text-blueGray-700">
                                <img :src="cryptocurrency.img" class="mr-2"/><a href="#">{{ cryptocurrency.name }}</a></th>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ cryptocurrency.price }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4"><i class="fas fa-arrow-down text-red-500 mr-4"></i>{{ cryptocurrency.oneh }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4"><i class="fas fa-arrow-up text-emerald-500 mr-4"></i>{{ cryptocurrency.twentyfourh }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4"><i class="fas fa-arrow-down text-red-500 mr-4"></i>{{ cryptocurrency.sevenday }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ cryptocurrency.marketcap }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ cryptocurrency.volume }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ cryptocurrency.circulating }}</td>
                                <td class="border-t-0 border border-solid border-blueGray-100 x-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Background du bas -->
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
            </defs>
            </svg>
        </div>
    </div>

    <!-- Pagination -->
    <div class="max-w-8xl mx-auto z-50 relative">
        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div class="-mt-px flex w-0 flex-1">
                <a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
                </svg>
                Previous
                </a>
            </div>
            <div class="hidden md:-mt-px md:flex">
                <a href="#" class="inline-flex items-center border-t-2 border-blue-500 px-4 pt-4 text-sm font-medium text-blue-600">1</a>
                <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">2</a>
                <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
                <span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span>
                <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">8</a>
                <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">9</a>
                <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">10</a>
            </div>
            <div class="-mt-px flex w-0 flex-1 justify-end">
                <a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                Next
                <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                </svg>
                </a>
            </div>
        </nav>
    </div>
</template>

<script setup>
  const cryptocurrencies = [
      { rank: '1', name: 'Bitcoin', price: '€16,183.21', oneh: '46,53%', twentyfourh: '46,53%', sevenday: '46,53%', marketcap: '€10,866,810,537', volume: '€27,935,073,285', circulating: '19,210,537 BTC', img: 'img/crypto-icon/bitcoin.png'},
      { rank: '2', name: 'Ethereum', price: '€16,183.21', oneh: '46,53%', twentyfourh: '46,53%', sevenday: '46,53%', marketcap: '€10,866,810,537', volume: '€27,935,073,285', circulating: '19,210,537 ETH', img: 'img/crypto-icon/ethereum.png'},
    ]
</script>   