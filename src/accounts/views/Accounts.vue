<template>
  <div class="flex flex-col">
    <div class="my-1 overflow-hidden sm:-mx-6 lg:-mx-8">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden sm:rounded-sm grid grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg leading-6 font-bold text-gray-900">
              Your Accounts
            </h3>

          </div>
          <div>
            <ul class="flex flex-col">
              <li v-for="(account, id) in accountData.accounts" :key="id"  class="mb-2">
                <div @click="openAccountProfileCard(account)" class="transition duration-500 ease-in-out transform select-none cursor-pointer bg-white dark:bg-gray-800 rounded-sm flex flex-row items-center">
                  <div class="p-4 sm:px-6">
                    <h3 class="text-lg leading-6 font-bold text-gray-900">
                      {{ account.name }}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      {{ account.description }}
                    </p>
                  </div>
                  <button :class="[text-right,flex,justify-end]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" :class="[{ transform: account.accountCardOpen },{ 'rotate-90': account.accountCardOpen}]" class="absolute right-2.5" viewBox="0 0 24 24">
                      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                  </button>
                </div>
                <div :class="[{ hidden: !account.accountCardOpen }]" class="bg-white overflow-hidden rounded-sm flex flex-col">
                  <div class="">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 grid grid-cols-4 sm:gap-4 sm:px-6">
                        <dt class="py-2 block text-md font-medium text-gray-900">
                          Account Name
                        </dt>
                        <input v-model="account.name" class="p-2 col-span-3 outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-md border border-gray-200">
                      </div>
                      <div class="bg-gray-50 px-4 py-5 grid grid-cols-4 sm:gap-4 sm:px-6">
                        <dt class="py-2 block text-md font-medium text-gray-900">
                          Account Type
                        </dt>
                        <input v-model="account.type" class="p-2 col-span-3 outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-md border border-gray-200">
                      </div>
                        
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accountDemoData } from "../../global/data/account-data";

export default {
  name: 'Accounts',
    data: () => ({
        accountData: accountDemoData,
        title: "Accounts",
        accountCardOpen: false
    }),
    methods: {
        openAccountProfileCard(account) {
            account.accountCardOpen = !account.accountCardOpen
        }
    }
}
</script>