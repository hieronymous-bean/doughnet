<template>

  <div class="flex">

    <AccountSummaryList :accounts="accountData" :accountTypes="accountTypes"/>

    <div class="bg-white rounded-sm shadow-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Trends</span>
            <span class="block text-lg font-light text-gray-800">Current trends in your spending habits.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>
    <div class="bg-white rounded-sm shadow-sm max-h-20 overflow-hidden">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Budgets</span>
            <span class="block text-lg font-light text-gray-800">Budgets you've created to manage your finances.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-dark font-bold text-white hover:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Create New Budget
        </button>
      </div>
    </div>

    <div class="bg-white rounded-sm shadow-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Bills</span>
            <span class="block text-lg font-light text-gray-800">Bills that you're currently tracking.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-dark font-bold text-white hover:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Add New Bill(s)
        </button>
      </div>
    </div>

    <div class="bg-white rounded-sm h-60 shadow-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Spending</span>
            <span class="block text-lg font-light text-gray-800">See where your money goes.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>
    <div class="bg-white rounded-sm shadow-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Goals</span>
            <span class="block text-lg font-light text-gray-800">Goals you've set for yourself.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-dark font-bold text-white hover:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Create New Goal
        </button>
      </div>
    </div>

  </div>
</template>

<script>

import AccountSummaryList from "../../accounts/components/AccountSummaryList.vue"

export default {
  name: 'Dashboard',
    data: () => ({
      title: "Dashboard",
      accountDataArray: []
    }),
    props: [
    'accountData',
    'accountTypes'
    ],
    components: {
      AccountSummaryList
    },
    methods: {
      openCreateAccountModal: function() {
        this.createAccountModal = !this.createAccountModal
      },
    },
}
</script>