<template>
  <div class="flex flex-col">
    <div class="mb-5 flex">
      <span class="">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">
          + Add New Account
        </button>
      </span>
    </div>
    <div class="my-1 overflow-hidden sm:-mx-6 lg:-mx-8">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden sm:rounded-sm">
          <ul class="flex flex-col">
            <li v-for="(account, id) in accountData.accounts" :key="id"  class="mb-6">
                <div @click="openAccountProfileCard(account)" class="transition border duration-500 ease-in-out transform select-none cursor-pointer bg-white dark:bg-gray-800 rounded-sm flex flex-row items-center p-6">
                    <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-bold text-gray-900">
                      Account Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Detailed information regarding specific account.
                    </p>
                  </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-light dark:text-white">
                            {{ account.currentBalance }}
                        </div>

                    </div>
                    <div class="flex pl-1 md:mr-16">
                        <div class="font-light dark:text-white">
                            {{ account.interestRate }}
                        </div>

                    </div>
                    <button :class="[text-right,flex,justify-end,{ transform: account.accountCardOpen },{ 'rotate-90': account.accountCardOpen}]">
                        <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>

                </div>

                <div :class="[{ hidden: !account.accountCardOpen }]" class="bg-white border-l border-r border-b overflow-hidden rounded-sm flex flex-col">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-bold text-gray-900">
                      Account Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Detailed information regarding specific account.
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Account Name
                        </dt>
                        <input v-model="account.name">
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Account Type
                        </dt>
                        <input v-model="account.type">
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
</template>


<script>
import { accountDemoData } from "../../static/account-data";

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