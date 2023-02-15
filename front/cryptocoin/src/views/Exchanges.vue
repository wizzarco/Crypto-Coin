<template>
    <div class="isolate bg-white">
      <!-- Background -->
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
      <Navbar></Navbar>
          
      <!-- Exchanges -->
        <div class="font-sans flex flex-col mt-32 mb-20">
            <div>
                <div class="md:overflow-hidden">
                    <div class="px-4 py-12">
                        <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 data-aos="zoom-in" class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            Top Cryptocurrency Spot Exchanges
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300" class="text-gray-600 md:text-base md:px-18">
                            CryptoCoin ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported
                        </p>
                        </div>
                    </div>
                    
                    <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/star.png" class="hidden sm:block absolute ml-8 bottom-40 xl:bottom-80 left-4 xl:left-0 w-6"/>
                    <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-3.png" class="hidden sm:block absolute top-4 sm:top-80 right-64 sm:right-96 xl:right-[32rem] w-6"/>
                    <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-2.png" class="hidden sm:block absolute bottom-56 right-24 w-6"/>
                    <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-2.png" class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"/>

                    <svg class="fill-current text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>

                <!--  Statistique des exchanges -->
                <StatisticExchanges></StatisticExchanges>
                
            </div>
        </div>

        <!-- Newsletter -->
        <Newsletter></Newsletter>
    </div>
</template>

<script>
  import Newsletter from "../components/Newsletter.vue";
  import StatisticExchanges from "../components/StatisticExchanges.vue";
  import Navbar from "../components/layouts/Navbar.vue";
  export default {
    components: {
      Navbar,
      StatisticExchanges,
      Newsletter,
    },
    data() {
      return {
      }
    },
  };
</script>