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
        
        <!-- Profile -->
        <div class="min-h-full">
            <main class="py-24 pt-24">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                <div class="flex items-center space-x-5">
                    <!-- Photo de profil -->
                <div class="flex-shrink-0">
                    <div class="relative">
                        <img class="h-16 w-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg">
                        <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"></span>
                    </div>
                    </div>
                    <div>
                    <h1 class="text-2xl font-bold text-gray-900">Stortz Loïc</h1>
                    <p class="text-sm font-medium text-gray-500">Profile update for the last time in 27/11/2022</p>
                    </div>
                </div>
                <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                    <button @click="resetpassword = true" ref="openButtonResetPassword" type="button" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Update password</button>
                    <button @click="updateprofil = true" ref="openButtonUpdateProfile" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">Update profile</button>
                </div>
                </div>

                <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                    <!-- Description des informations du profil -->
                    <section aria-labelledby="applicant-information-title">
                    <div class="bg-white shadow sm:rounded-lg">
                        <div class="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">My account</h2>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Firstname</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Lastname</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">E-mail address</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                        </dl>
                        </div>
                    </div>
                    </section>
                    <section aria-labelledby="applicant-information-title">
                    <div class="bg-white shadow sm:rounded-lg">
                        <div class="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">Personal information</h2>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Address</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">City</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Zip code</dt>
                            <dd class="mt-1 text-sm text-gray-900">jspmdr</dd>
                            </div>
                            <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Website</dt>
                            <a href="https://<?= $user['WEBSITE'] ?>/" target="_blank"><dd class="mt-1 text-sm text-gray-900">jspmdr</dd></a>
                            </div>
                        </dl>
                        </div>
                    </div>
                    </section>
                    
                    <div class="bg-white shadow sm:rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">Delete account</h3>
                            <div class="mt-2 max-w-xl text-sm text-gray-500">
                            <p>This action will be irreversible and all your information will be deleted.</p>
                            </div>
                            <div class="mt-5">
                                <button @click="suppaccount = true" ref="openButtonRef" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 sm:text-sm">Supprimer</button>
                            </div>
                        </div>
                    </div>
                    
                    <a href="/logout" class="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600">
                    <svg class="text-gray-400 group-hover:text-gray-500 mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></path>
                    </svg>
                    Logout
                    </a>
                </div>

                <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
                    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                    <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Favorite crypto</h2>

                    <!-- Crypto fav -->
                    <div class="mt-3 flow-root">
                    <ul role="list" class="divide-y divide-gray-200">
                        <li class="py-4">
                            <div class="flex space-x-3">
                                <img class="h-6 w-6 rounded-full" src="img/crypto-icon/bitcoin.png">
                                <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Bitcoin</h3>
                                    <p class="text-sm text-gray-500">Last update: 1h</p>
                                </div>
                                <p class="text-sm text-gray-500">Bitcoin crypto favorite</p>
                                </div>
                            </div>
                        </li>

                        <li class="py-4">
                            <div class="flex space-x-3">
                                <img class="h-6 w-6 rounded-full" src="img/crypto-icon/bitcoin.png">
                                <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Bitcoin</h3>
                                    <p class="text-sm text-gray-500">Last update: 1h</p>
                                </div>
                                <p class="text-sm text-gray-500">Bitcoin crypto favorite</p>
                                </div>
                            </div>
                        </li>

                        <li class="py-4">
                            <div class="flex space-x-3">
                                <img class="h-6 w-6 rounded-full" src="img/crypto-icon/bitcoin.png">
                                <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Bitcoin</h3>
                                    <p class="text-sm text-gray-500">Last update: 1h</p>
                                </div>
                                <p class="text-sm text-gray-500">Bitcoin crypto favorite</p>
                                </div>
                            </div>
                        </li>

                        <li class="py-4">
                            <div class="flex space-x-3">
                                <img class="h-6 w-6 rounded-full" src="img/crypto-icon/bitcoin.png">
                                <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Bitcoin</h3>
                                    <p class="text-sm text-gray-500">Last update: 1h</p>
                                </div>
                                <p class="text-sm text-gray-500">Bitcoin crypto favorite</p>
                                </div>
                            </div>
                        </li>

                        <li class="py-4">
                            <div class="flex space-x-3">
                                <img class="h-6 w-6 rounded-full" src="img/crypto-icon/bitcoin.png">
                                <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Bitcoin</h3>
                                    <p class="text-sm text-gray-500">Last update: 1h</p>
                                </div>
                                <p class="text-sm text-gray-500">Bitcoin crypto favorite</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                    
                    <div class="mt-6 flex flex-col justify-stretch">
                        <a href="add_user"><button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">View all favorite crypto</button></a>
                    </div>
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
                </div>
            </main>
            
        </div>
    </div>

    <!-- Modal confirmation delete account -->
    <TransitionRoot as="template" :show="suppaccount">
        <Dialog as="div" class="relative z-10" @close="suppaccount = false">
        <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 justify-center mt-72">
            <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel class="relative transform overflow-hidden rounded-lg mx-auto text-left transition-all p-4 max-w-md md:h-auto ">
                    <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Confirm user removal</h3>
                        <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Are you sure you want to delete this user from the Crypto Coin platform?</p>
                        <div class="p-4 mb-4 text-sm text-left text-orange-700 bg-orange-100 rounded-lg sm:mb-5 dark:bg-gray-700 dark:text-orange-300" role="alert">
                            <div class="items-center mb-1">
                                <svg class="inline flex-shrink-0 mr-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Danger</span>
                                <span class="font-semibold leading-none">Warning</span>
                            </div>
                            <p>By deleting this user, all information will be permanently deleted.</p>
                        </div>
                        <div class="flex justify-center items-center space-x-4">
                            <button @click="suppaccount = false" ref="cancelButtonRef" data-modal-toggle="deleteAlertModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancel
                            </button>
                            <button type="submit" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg aria-hidden="true" class="w-4 h-4 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                Yes, confirm delete
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </TransitionChild>
        </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal pour modifier le profil -->
    <TransitionRoot as="template" :show="updateprofil">
        <Dialog as="div" class="relative z-10" @close="updateprofil = false">
        <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 justify-center mt-32">
            <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel class="relative transform overflow-hidden rounded-lg mx-auto text-left transition-all p-4 w-full max-w-2xl h-full md:h-auto">
                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Update user
                            </h3>
                            <button @click="updateprofil = false" ref="cancelButtonRef" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateUserModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                <div class="sm:col-span-2">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload avatar</label>
                                    <div class="items-center w-full sm:flex">
                                        <img class="mb-4 w-20 h-20 rounded-full sm:mr-4 sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg">
                                        <div class="w-full">
                                            <input class="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                                            <p class="mt-1 mb-3 text-xs font-normal text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                            <div class="flex items-center space-x-2.5">
                                                <button type="button" class="inline-flex items-center py-2 px-3 text-xs font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                    <svg class="mr-1 -ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                    Upload new picture
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="first-name" id="first-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="number" name="number" id="phone-number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <input type="text" name="first-name" id="first-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <input type="text" name="last-name" id="last-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip code</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                                    <input type="number" name="number" id="phone-number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>

                                <!-- <div class="sm:col-span-2">
                                    <label for="biography" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                                    <div class="w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                                            <textarea id="biography" rows="5" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" required=""></textarea>
                                        </div>
                                    </div>
                                </div> -->
                                
                                <!-- <div class="sm:col-span-2">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="role">Assign Role</label>
                                    <div class="space-y-4 sm:flex sm:space-y-0">
                                        <div class="flex items-center mr-4">
                                            <input id="inline-checkbox" type="checkbox" value="" name="role" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</label>
                                        </div>
                                        <div class="flex items-center mr-4">
                                            <input id="inline-2-checkbox" type="checkbox" value="" name="role" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Member</label>
                                        </div>
                                        <div class="flex items-center mr-4">
                                            <input checked="" id="inline-checked-checkbox" type="checkbox" value="" name="role" class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="inline-checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</div>
                                    <label for="user-status" class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" value="" id="user-status" class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Inactive</span>
                                    </label>  
                                </div> -->
                            </div>
                            <div class="flex items-center space-x-4">
                                <button type="submit" class="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Update user
                                </button>
                            </div>
                        </form>
                    </div>
                </DialogPanel>
            </TransitionChild>
        </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal reset le mot de passe -->
    <TransitionRoot as="template" :show="resetpassword">
        <Dialog as="div" class="relative z-10" @close="resetpassword = false">
        <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 justify-center">
            <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel class="relative transform overflow-hidden rounded-lg mx-auto text-left transition-all px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Change password
                                </h3>
                                <button @click="resetpassword = false" ref="cancelButtonRef" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateUserModal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset passwod</button>
                            </form>
                        </div>
                    </div>
                </DialogPanel>
            </TransitionChild>
        </div>
        </Dialog>
    </TransitionRoot>
    
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const suppaccount = ref(false)
const updateprofil = ref(false)
const resetpassword = ref(false)
</script>

<script>
  import Navbar from "../../components/layouts/Navbar.vue";
  export default {
    components: {
        Navbar,
    },
  };
</script>