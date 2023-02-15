<template>
    <div class="isolate bg-white">

        <!-- Navbar -->
        <Navbar></Navbar>

        <!-- 404 -->
        <div class="flex min-h-full mt-48 flex-col pb-12">
            <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <a href="/" class="inline-flex">
                        <img class="h-20 w-auto" src="/img/logo/logotype_sf_bleu.png" />
                    </a>
                </div>
                  <img src="img/pattern/ellipse-1.png" class="hidden sm:block absolute ml-8 mb-16 bottom-40 xl:bottom-16 left-4 xl:left-0 w-6"/>
                  <img src="img/pattern/ellipse-2.png" class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"/>
                  <img src="img/pattern/ellipse-3.png" class="hidden sm:block absolute bottom-56 right-24 w-6"/>
                  <img src="img/pattern/star.png" class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"/>
                <div class="py-16">
                    <div class="text-center">
                    <p class="text-xl font-semibold text-blue-600">404</p>
                    <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
                    <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div class="mt-6">
                        <a href="/" class="text-base font-medium text-blue-600 hover:text-blue-500">
                        Go back home
                        <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                    </div>
                </div>
            </main>
            <center><img src="img/error-404.png" class="h-48"/></center>
        </div>

        <!-- Background du bas -->
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]">
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
</template>

<script>
  import Navbar from "../components/layouts/Navbar.vue";
  export default {
    components: {
      Navbar,
    },
  };
</script>