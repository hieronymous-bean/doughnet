<template>
<div>
  <Topbar/>
  <PageHeader/>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="">
          <div class="flex flex-col min-h-screen gap-10 p-4 antialiased bg-white md:p-0">

    <div class="flex w-full overflow-hidden text-gray-900 bg-white rounded-lg shadow-lg md:max-w-3xl">
        <img src="https://images.unsplash.com/photo-1601119479271-21ca92049c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
            alt="Computer with a open browser displaying authentication error"
            class="hidden object-cover w-2/6 select-none sm:block">
        <div class="flex flex-col justify-between w-full p-5">
            <div class="mb-10 break-all">
                <h2 class="mb-3 text-xl font-black leading-tight md:text-2xl md:leading-none">
                    Accounts.
                </h2>
                <p class="leading-relaxed text-gray-700 lg:max-w-md md:truncate">
                    You need to add accounts in order to use tools.<br class="hidden md:block">
                    Navigate to the accounts page to add accounts.
                </p>
            </div>

            <div class="grid w-full grid-flow-row-dense grid-cols-2 gap-3 md:grid-cols-3">
                <button
                    class="col-start-2 col-end-4 py-1 font-bold text-white bg-indigo-500 rounded-lg md:col-start-3 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline">
                    Accounts
                </button>

            </div>
        </div>
    </div>

</div>

        </div>
      </div>
    </div>
    <Footer/>
  </main>
  
</div>

</template>
<script>

import Topbar from './Topbar.vue'
import Footer from './Footer.vue'

import PageHeader from '../components/global/PageHeader.vue'

export default {
    components: {
      PageHeader,
      Topbar,
      Footer
    }
}
</script>