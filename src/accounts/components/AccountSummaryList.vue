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
          <li v-for="(accountType, index) in accountTypes" :key="index" class="items-center my-3 font-light px-3">
            <AccountTypeHeader :typeOfAccount="accountType"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>

import AccountTypeHeader from './AccountTypeHeader.vue'

export default {
  data: function() {
    return {
      name: 'AccountSummaryList',
      title: 'AccountSummaryList'
    }
  },
  components: {
    AccountTypeHeader
  },
    props: [
      'accounts',
      'accountTypes',
      'typeExpanded'
    ],
    methods: {
    },
    computed: {
    }
}

</script>