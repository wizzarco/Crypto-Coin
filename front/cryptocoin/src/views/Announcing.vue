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

    <!-- Recent post -->
    <section class="mt-8">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
              <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent blog</h2>
              <p data-aos="fade-up" data-aos-delay="150" data-aos-once="true" class="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div> 
          <div class="grid gap-8 mb-16 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700 lg:grid-cols-3">
              <article>
                  <a href="#">
                      <img class="mb-5 rounded-lg" src="img/blog/ss-crypto-future.jpeg">
                  </a>
                  <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">How too add a favori</a>
                  </h2>
                  <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus quae quod amet voluptatum quam ab ullam, dolor repellat, totam doloribus rem eaque, velit delectus nihil vero cupiditate. Commodi, accusantium.</p>
                  <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </article> 
              <div class="space-y-8 lg:pl-8">
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut assumenda totam, beatae ea atque odio nihil consequuntur, nisi quis magni veniam illo tempore? Obcaecati velit quidem molestiae nisi porro magnam?</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article> 
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta suscipit libero labore aspernatur, odit mollitia velit enim aliquid? Id minima accusantium enim fuga dolorum necessitatibus labore perferendis deserunt error fugit?</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article> 
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quidem minus dolor fugiat fuga deleniti. Voluptate harum maiores sint cumque sapiente molestias at, minima, suscipit, eaque quam error unde ipsum!</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article> 
              </div>
              <div class="space-y-8 lg:pl-8">
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia minus tempora inventore libero consequatur doloremque, similique laudantium, voluptates recusandae eaque, soluta deserunt excepturi atque provident autem aliquid iusto. Ipsum, nihil..</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article> 
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque modi, ratione reiciendis facere suscipit nisi beatae cupiditate deserunt similique quis in error exercitationem nam eos aliquid. Unde doloremque exercitationem eaque.</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article>
                  <article>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Titre</a>
                      </h2>
                      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit distinctio laborum similique esse unde corporis inventore quidem ratione quam, ullam neque est, repellendus eum aliquid aliquam alias sunt voluptatum animi!</p>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 hover:underline dark:text-sky-500">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </article>
              </div>
          </div>  
      </div>
    </section>

    <hr data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="pb-8 border-gray-400 mx-auto max-w-screen-xl">

    <!-- Blog pour les actu du crypto -->
    <section class="pb-24">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
              <p data-aos="fade-up" data-aos-delay="150" data-aos-once="true" class="font-light text-gray-500 sm:text-xl dark:text-gray-400">all the news of crypto-money</p>
          </div> 
          <div class="grid gap-8 lg:grid-cols-2">
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                      <span class="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                          <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                          Trading
                      </span>
                      <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title du blog</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Description du blog --> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, eaque. Cum mollitia velit alias rem sint expedita iusto inventore corrupti. Quas natus quae repellat, magnam veritatis facere. Cum, nesciunt sit?
                  </p>
                  <div class="flex justify-between items-center">
                      <div class="flex items-center space-x-4">
                          <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                          <span class="font-medium dark:text-white">
                              Jese Leos
                          </span>
                      </div>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 dark:text-sky-500 hover:underline">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </article> 
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                      <span class="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                          <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                          Trading
                      </span>
                      <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title du blog</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Description du blog --> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, eaque. Cum mollitia velit alias rem sint expedita iusto inventore corrupti. Quas natus quae repellat, magnam veritatis facere. Cum, nesciunt sit?
                  </p>
                  <div class="flex justify-between items-center">
                      <div class="flex items-center space-x-4">
                          <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                          <span class="font-medium dark:text-white">
                              Jese Leos
                          </span>
                      </div>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 dark:text-sky-500 hover:underline">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </article> 
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                      <span class="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                          <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                          Trading
                      </span>
                      <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title du blog</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Description du blog --> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, eaque. Cum mollitia velit alias rem sint expedita iusto inventore corrupti. Quas natus quae repellat, magnam veritatis facere. Cum, nesciunt sit?
                  </p>
                  <div class="flex justify-between items-center">
                      <div class="flex items-center space-x-4">
                          <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                          <span class="font-medium dark:text-white">
                              Jese Leos
                          </span>
                      </div>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 dark:text-sky-500 hover:underline">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </article> 
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                      <span class="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                          <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                          Trading
                      </span>
                      <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Title du blog</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Description du blog --> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, eaque. Cum mollitia velit alias rem sint expedita iusto inventore corrupti. Quas natus quae repellat, magnam veritatis facere. Cum, nesciunt sit?
                  </p>
                  <div class="flex justify-between items-center">
                      <div class="flex items-center space-x-4">
                          <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                          <span class="font-medium dark:text-white">
                              Jese Leos
                          </span>
                      </div>
                      <a href="#" class="inline-flex items-center font-medium text-sky-600 dark:text-sky-500 hover:underline">
                          Read more
                          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </article>                  
          </div> 

          <!-- Background du bas -->
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%--25rem)]">
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
    </section>

    <Newsletter></Newsletter>

    </div>
</template>

<script>
  import Newsletter from "../components/Newsletter.vue"
  import Navbar from "../components/layouts/Navbar.vue";
  export default {
    components: {
        Navbar,
        Newsletter,
    },
  };
</script>