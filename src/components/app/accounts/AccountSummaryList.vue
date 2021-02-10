<template>
  <div class="bg-white rounded-sm">
    <div class="px-6 py-5 flex">
      <h2 class="flex-1">
        <span class="block font-sans text-4xl font-bold text-primary-dark pb-2">Accounts</span>
        <span class="block text-xl font-light text-gray-800">All of your currently active accounts that you're tracking.</span>
      </h2>
      <div class="flex-2">
        <button class="focus:outline-none">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex-1">
        <ul class="account-item w-full accordion-arrow px-3">
          <li v-for="(accountType, index) in accountTypes" :key="index" @click="expandTypeDropdown(index)" :tracker="accountType" class="items-center my-3 font-light px-3">
            <div class="grid grid-cols-2 rounded border border-gray-100 bg-gray-50 p-2">
              <div class="relative">
                <button class="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" class="absolute top-2.5" viewBox="0 0 24 24">
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                  </svg>
                </button>
                <span class="mx-4">{{ accountType }}</span>
              </div>
              <div class="relative">
                <span class="float-right">Type Total</span>
              </div>
            </div> 
            <div v-show="typeDropdownIsOpen" class="grid grid-cols-1">
              <div v-for="account in accounts" :key="account.id">
                <div v-show="account.type == accountType" class="p-2 font-medium text-lg text-primary-dark font-semibold underline">
                  <router-link
                    class="flex items-center"
                    to="/transactions"
                  >
                  {{ account.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data: function() {
        return {
            title: 'AccountSummaryList',
            typeDropdownIsOpen: false
        }
    },
    components: {
    },
    props: [
      'accounts',
      'accountTypes'
    ],
    methods: {
        expandTypeDropdown: function() {
            this.typeDropdownIsOpen = !this.typeDropdownIsOpen
        }
    }
}

</script>