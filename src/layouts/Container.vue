<template>
<div>
  <Topbar/>
  <PageHeader/>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="">

            <div class="container mx-auto py-10 h-32 md:w-5/5 w-12/12">
                <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
                <div class="w-full h-full rounded border-dashed border-2 border-gray-300">
                        <!-- Place your content here -->
                </div>
            </div>

          <div class="flex flex-col gap-1 my-8 antialiased bg-white md:p-0">
            <div class="flex overflow-hidden text-gray-700 bg-white rounded-md shadow-xl md:max-w-2xl">
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
                  class="col-start-2 col-end-4 py-1 font-bold text-white bg-indigo-700 rounded-lg md:col-start-3 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline">
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