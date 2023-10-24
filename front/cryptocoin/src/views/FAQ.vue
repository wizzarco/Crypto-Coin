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

    <!-- FAQ -->
    <section>
        <img data-aos="fade-up" data-aos-delay="400" data-aos-once="true" src="img/pattern/ellipse-1.png" class="hidden sm:block absolute ml-8 mb-8 bottom-40 left-4 xl:left-0 w-6"/>
        <img data-aos="fade-up" data-aos-delay="400" data-aos-once="true" src="img/pattern/ellipse-3.png" class="hidden sm:block absolute top-4 sm:top-40 right-64 sm:right-96 xl:right-[32rem] w-6"/>
        <img data-aos="fade-up" data-aos-delay="400" data-aos-once="true" src="img/pattern/star.png" class="hidden sm:block absolute bottom-56 right-24 w-6"/>
        <img data-aos="fade-up" data-aos-delay="400" data-aos-once="true" src="img/pattern/ellipse-2.png" class="hidden sm:block absolute top-20 sm:top-20 right-16 lg:right-0 lg:left-[30rem] w-8"/>
        <div class="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="max-w-xl">
                <h2 data-aos="fade-up" data-aos-once="true" id="faq-heading" class="text-2xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                <p data-aos="fade-left" data-aos-delay="200" data-aos-once="true" class="mt-4 text-base text-gray-500">Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always <a href="/contact" class="font-medium text-blue-600 hover:text-blue-500">send us an email</a> with your enquiry.</p>
            </div>

            <dl data-aos="fade-down" data-aos-delay="400" data-aos-once="true" class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                <div v-for="faq in faqs">
                    <dt class="text-base font-medium text-gray-900">{{ faq.question }}</dt>
                    <dd class="mt-3 text-sm text-gray-500">{{ faq.answer }}</dd>
                </div>
            </dl>
        </div>
    </section>

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

    <!-- Newsletter -->
    <Newsletter></Newsletter>

    </div>
</template>

<script>
  import Newsletter from "../components/Newsletter.vue"; 
  import Navbar from "../components/layouts/Navbar.vue";
  export default {
    components: {
        Navbar,
        Newsletter,
    },
  };
</script>

<!-- FAQ SETUP -->
    <script setup>
        const faqs = [
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
            {
                question: 'Question à poser',
                answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis temporibus neque dolorem veniam ex officia suscipit, aspernatur reprehenderit minus necessitatibus et rerum earum nam numquam totam voluptatum, veritatis nisi!',
            },
        ]
</script>