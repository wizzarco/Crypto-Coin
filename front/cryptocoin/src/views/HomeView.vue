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
    
    <!-- Home du site -->
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span class="animate-pulse text-gray-600">
                  Stay connected by subscribing to the <button @click="open = true" ref="openButtonRef" type="button" class="font-semibold text-blue-600"><span class="absolute inset-0" aria-hidden="true" />Newsletter <span aria-hidden="true">&rarr;</span></button>
                </span>
              </div>
            </div>
            <div>
              <div class="hidden sm:block col-span-12 lg:col-span-6">
                  <center><img src="img/hero-image.webp" class="-mt-4 w-40 h-40"/></center>
                  <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-1.png" class="hidden sm:block absolute ml-8 mb-8 bottom-40 xl:bottom-16 left-4 xl:left-0 w-6"/>
                  <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-2.png" class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"/>
                  <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/ellipse-3.png" class="hidden sm:block absolute bottom-56 right-24 w-6"/>
                  <img data-aos="fade-up" data-aos-delay="400" src="img/pattern/star.png" class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"/>
              </div>
              <h1 data-aos="zoom-in" class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">The World's <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Fastest Growing</span> Crypto Web App</h1>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Consult CryptoCoin and follow live the price of the main cryptocurrencies. Evolution over 24 hours, volumes, capitalization, evolution of euro/dollar prices in real time.</p>
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
        </div>
      </div>
    </main>

    <!-- Crypto statistic -->
    <StatisticCrypto></StatisticCrypto>
    
    <!-- View all Exchanges -->
    <div>
        <center><a href="/exchanges"><button class="py-2 px-4 bg-transparent mt-8 text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">View all Exchanges</button></a></center>
    </div>

    <!-- Advanced trading tools -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <!-- Icon de la section MOBILE -->
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 sm:hidden" v-bind="$attrs">
          <div class="w-full sm:mt-20 xl:mt-0">
            <img src="img/advanced-trading-tools.webp" class="w-full"/>
          </div>
        </div>
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Advanced Trading <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Tools</span></h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity,
              reliable order execution and constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <button class="px-4 py-2 bg-transparent outline-none border-2 border-blue-400 rounded text-blue-500 font-medium active:scale-95 hover:bg-blue-600 hover:text-white hover:border-transparent focus:bg-blue-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">Get Started</button>
          </div>
        </div>
        <!-- Icon de la section -->
        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 hidden sm:block" v-bind="$attrs">
          <div class="w-full sm:mt-20 xl:mt-0">
            <img src="img/advanced-trading-tools.webp" class="w-full" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- Security -->
    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="img/industry-leading-security.webp" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Security</span></h2>
          <ul class="space-y-8 sm:space-y-4">
            <h4 class="text-lg font-medium">Safety, security and compliance</h4>
              <p class="paragraph text-sm xl:text-base">
                The 100% protected and secure web application created for you to trade without complication
              </p>
              <h4 class="text-lg font-medium">Hardware security keys</h4>
              <p class="paragraph text-sm xl:text-base">
                With CryptoCoin you can secure your account with a hardware security key via Oauth2.
              </p>
              <h4 class="text-lg font-medium">SOC Certifications</h4>
              <p class="paragraph text-sm xl:text-base">
                100% reliable and secure trading certification, everything is updated in real time without you needing to do anything
              </p>
          </ul>
        </div>
      </div>
    </section>

    <!-- Get started -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div data-aos="fade-up" class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8">
          <div class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="img/icon-started/signup.png" class="max-w-[245px] mx-auto" alt="" />
            <h3 class="text-xl text-neutral-800 font-semibold">Sign Up</h3>
            <p class="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem quaerat unde aspernatur id delectus temporibus velit asperiores, natus quod quasi impedit sint consectetur, et nesciunt doloribus fugit tempora ipsa.
            </p>
          </div>
          <div class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="img/icon-started/fund.png" class="max-w-[245px] mx-auto" alt="" />
            <h3 class="text-xl text-neutral-800 font-semibold">Fund</h3>
            <p class="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint tenetur in delectus possimus beatae. Minima vel dignissimos, cum iure dolorem ab eum officia error tempora atque, totam commodi temporibus!
            </p>
          </div>
          <div class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
            <img src="img/icon-started/trading.png" class="max-w-[245px] mx-auto" alt="" />
            <h3 class="text-xl text-neutral-800 font-semibold">Trading</h3>
            <p class="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis tenetur quaerat repellat quidem numquam ex molestiae ipsa, enim reprehenderit nulla nobis in quae assumenda incidunt delectus temporibus, natus facilis voluptatum.
            </p>
          </div>
          <img src="img/icon-started/arrow.png" class="hidden lg:inline-block absolute top-32 left-64 xl:left-[30rem] w-24 xl:w-[9.5rem]"/>
          <img src="img/icon-started/arrow.png" class="hidden lg:inline-block absolute top-32 right-64 xl:right-[30rem] w-24 xl:w-[9.5rem]"/>
        </div>
      </div>
    </section>


    <!-- Blogs -->
    <div data-aos="zoom-out" data-aos-delay="500" class="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-blue-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span class="block">Announcing</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-blue-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
            <a href="/announcing" class="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 shadow hover:bg-blue-50">See all announcing</a>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
          <img class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="/img/news.jpeg">
        </div>
      </div>
    </div>

  </div>

  <!-- Modal pour la newsletter -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 justify-center mt-72">
        <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <DialogPanel class="relative transform overflow-hidden rounded-lg mx-auto max-w-7xl text-left transition-all sm:my-8">
            <div class="rounded-3xl bg-blue-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
              <button @click="open = false" ref="cancelButtonRef" type="button" class="absolute top-0 right-0 mr-2 mt-2 text-white bg-transparent hover:text-gray-200 text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="staticModal">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
              </button>
              <div class="lg:w-0 lg:flex-1">
                <h2 class="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                <p class="mt-4 max-w-3xl text-lg text-blue-100">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
              </div>
              <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form class="sm:flex">
                  <input id="EMAIL" name="EMAIL" type="email" autocomplete="email" required class="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700" placeholder="Enter your email" />
                  <button type="submit" class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notify me</button>
                </form>
                <p class="mt-3 text-sm text-blue-100">
                  We care about the protection of your data. Read our
                  {{ ' ' }}
                  <a href="#" class="font-medium text-white underline">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script>
  import StatisticCrypto from "../components/StatisticCrypto.vue";
  import Navbar from "../components/layouts/Navbar.vue";
  export default {
    components: {
      Navbar,
      StatisticCrypto,
    },
    data() {
      return {
      }
    },
  };
</script>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
</script>

<style scoped>
.bg-trading-tools {
  background: url('img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>