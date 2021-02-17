<template>
  <div>
    <div class="grid grid-cols-4 gap-8 mb-8">
      <NetWorthWidget/>
      <CashFlowWidget/>
      <DebtPaydownWidget/>
      <EmergencyFundWidget/>
    </div>

    <div class="grid grid-cols-2 gap-8">

    <AccountSummaryList :accounts="accountData" :accountTypes="accountTypes" v-on:refreshAccountData="refreshAccountData"/>

    <div class="bg-white rounded-md border">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-black">Trends</span>
            <span class="block text-lg font-light text-gray-800">Current trends in your spending habits.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>
    <div class="bg-white rounded-md border overflow-hidden">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-black">Budgets</span>
            <span class="block text-lg font-light text-gray-800">Budgets you've created to manage your finances.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md px-4 py-2 bg-secondary-four font-normal text-black hover:bg-secondary-four focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Create New Budget
        </button>
      </div>
    </div>

    <div class="bg-white rounded-md border">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-black">Bills</span>
            <span class="block text-lg font-light text-gray-800">Bills that you're currently tracking.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md px-4 py-2 bg-secondary-four font-normal text-black hover:bg-secondary-four focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Add New Bill(s)
        </button>
      </div>
    </div>

    <div class="bg-white rounded-md h-60 border">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-black">Spending</span>
            <span class="block text-lg font-light text-gray-800">See where your money goes.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>
    <div class="bg-white rounded-md border">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-black">Goals</span>
            <span class="block text-lg font-light text-gray-800">Goals you've set for yourself.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">
        <button type="button" class="w-full rounded-md px-4 py-2 bg-secondary-four font-normal text-black hover:bg-secondary-four focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Create New Goal
        </button>
      </div>
    </div>

  </div></div>
  
</template>

<script>

import NetWorthWidget from '../components/NetWorthWidget.vue'
import CashFlowWidget from '../components/CashFlowWidget.vue'
import DebtPaydownWidget from '../components/DebtPaydownWidget.vue'
import EmergencyFundWidget from '../components/EmergencyFundWidget.vue'
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
      NetWorthWidget,
      CashFlowWidget,
      DebtPaydownWidget,
      EmergencyFundWidget,
      AccountSummaryList
    },
    methods: {
      refreshAccountData: function() {
        this.$emit('refreshAccountData');
      },
      openCreateAccountModal: function() {
        this.createAccountModal = !this.createAccountModal
      },
    },
}
</script>