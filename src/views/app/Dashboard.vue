<template>

  <div class="grid grid-cols-2 gap-8">
    <div class="bg-white rounded-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark pb-2">Accounts</span>
            <span class="block text-xl font-light text-gray-800">All of your currently active accounts.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="flex-1">
        <div class="flex-1">
          <ul class="account-item w-full accordion-arrow px-3">
            <li v-for="(account, id) in accountData.accounts" :key="id" class="accordion-item my-3 font-light border-t border-b border-gray-100 px-3 py-3">
              
              {{ account.type }}
              
              <div class="accordion-body">
                <p v-for="(account, id) in accountData.accounts" :key="id">
                  
                </p>
              </div>
            </li> 
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-sm">
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

    <div class="bg-white rounded-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Budgets</span>
            <span class="block text-lg font-light text-gray-800">Budgets you've created to manage your finances.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>

    <div class="bg-white rounded-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Bills</span>
            <span class="block text-lg font-light text-gray-800">Bills that you're currently tracking.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>

    <div class="bg-white rounded-sm">
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

    <div class="bg-white rounded-sm">
      <div class="px-6 py-5 flex">
        <h2 class="flex-1">
            <span class="block font-sans text-4xl font-bold text-primary-dark">Goals</span>
            <span class="block text-lg font-light text-gray-800">Goals you've set for yourself.</span>
        </h2>
        <div class="flex-2"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/></svg></div>
      </div>
      <div class="px-6 flex-1">

      </div>
    </div>
    
  </div>
</template>

<script>

import { accountDemoData } from "../../static/account-data";

export default {
  name: 'Dashboard',
    data: () => ({
      accountData: accountDemoData,
        title: "Dashboard"
    }),
    methods: {

    }
}
</script>