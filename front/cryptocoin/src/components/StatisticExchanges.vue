<template>
    <div data-aos="zoom-in" data-aos-delay="600" data-aos-once="true" class="max-w-8xl mx-auto bg-white shadow-lg relative z-20 hidden md:block" style="margin-top: -320px; border-radius: 20px;">
        <div class="mb-12 xl:mb-0 mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-sky-700">Watchlist</h3>
                    </div>
                </div>
                </div>

                <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse">
                    <!-- Ce que contient la tables des exchanges -->
                    <thead>
                        <tr>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rank</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Grade point</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Volume (24h)</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Avg. Liquidity</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Weekly Visits</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Country</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Negative Report</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Market Quality</th>
                            <th class="px-6 bg-sky-50 text-sky-500 align-middle border border-solid border-sky-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Volume Graph (7d)</th>
                        </tr>
                    </thead>

                    <!-- Contents de la table -->
                    <tbody>
                        <tr v-for="(crypto, index) in cryptocurrencies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)" class="hover:bg-gray-100">
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.rank }}</td>
                            <th class="border-t-0 px-6 align-middle border border-solid border-sky-100 text-sm border-l-0 border-r-0 whitespace-nowrap p-4 text-left flex items-center text-sky-700">
                                <img :src="crypto.image" class="mr-2 h-6"/>
                                <a :href="crypto.link" target="_blank">{{ crypto.name }}</a>
                            </th>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative">{{ crypto.gradepoint }}</span>
                                </span>
                            </td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.volume24h.BTC }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.rating.avg }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.rating.totalUsers }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.country }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.negativereport }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{{ crypto.marketquality }}</td>
                            <td class="border-t-0 border border-solid border-sky-100 x-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">À faire</td>
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
                <a href="#" v-if="currentPage > 1" @click.prevent="loadPage(currentPage - 1)" class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:text-sky-500">
                    <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
                    </svg>
                    Previous
                </a>
                <a v-else class="cursor-not-allowed inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500">
                </a>
            </div>

            <div class="hidden md:-mt-px md:flex">
                <template v-for="page in totalPage">
                    <!-- Afficher les trois premières pages -->
                    <a href="#" v-if="page <= 3" :key="page" @click.prevent="loadPage(page)"
                        class="border-t-2 px-4 pt-4 text-sm font-medium"
                        :class="{
                            'border-sky-500 text-sky-600': currentPage === page,
                            'border-transparent text-gray-500 hover:border-gray-300 hover:text-sky-600': currentPage !== page
                        }">
                        {{ page }}
                    </a>

                    <!-- Afficher les points de suspension avant la page actuelle -->
                    <span v-if="page === 4 && totalPage > 6 && currentPage > 4" class="px-4 pt-4 text-sm font-medium text-gray-500">...</span>

                    <!-- Afficher la page actuelle (sauf sur les trois premières pages) -->
                    <span v-if="currentPage === page && currentPage > 3 && currentPage < totalPage - 2"
                        class="border-t-2 px-4 pt-4 text-sm font-medium text-gray-500"
                        :class="{
                            'border-sky-500 text-sky-600': currentPage === page,
                            'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': currentPage !== page
                        }">
                        {{ currentPage }}
                    </span>

                    <!-- Afficher les points de suspension après la page actuelle -->
                    <span v-if="page === currentPage + 2 && totalPage > currentPage + 3 && currentPage < totalPage - 2"
                        class="px-4 pt-4 text-sm font-medium text-gray-500">...</span>

                    <!-- Afficher les trois dernières pages -->
                    <a href="#" v-if="page >= totalPage - 2" :key="page" @click.prevent="loadPage(page)"
                        class="border-t-2 px-4 pt-4 text-sm font-medium"
                        :class="{
                            'border-sky-500 text-sky-600': currentPage === page,
                            'border-transparent text-gray-500 hover:border-gray-300 hover:text-sky-600': currentPage !== page
                        }">
                        {{ page }}
                    </a>
                </template>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end">
                <a href="#" v-if="currentPage < totalPage" @click.prevent="loadPage(currentPage + 1)" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:text-sky-500">
                    Next
                    <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a v-else class="cursor-not-allowed inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500">
                </a>
            </div>
        </nav>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const cryptocurrencies = ref([]);
    const currentPage = ref(1);
    const totalPage = ref(29);
    const itemsPerPage = 10;

    const loadPage = async (page) => {
        try {
            if (page < 1 || page > totalPage.value) {
                return;
            }

            const response = await axios.get(`http://localhost:11003/api_back/cryptos/all-exchanges`);
            cryptocurrencies.value = response.data;

            // Calculer le rang en fonction de la page actuelle
            const startIndex = (page - 1) * itemsPerPage;
            cryptocurrencies.value.slice(startIndex, startIndex + itemsPerPage).forEach((crypto, index) => {
                crypto.rank = startIndex + index + 1;
            });

            currentPage.value = page;
        } catch (error) {
            console.error('Error loading page:', error.response ? error.response.data : error.message);
        }
    };

    onMounted(() => {
        loadPage(currentPage.value);
    });
</script>


