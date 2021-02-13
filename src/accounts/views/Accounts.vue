<template>
  <div class="flex flex-col">
    <div class="my-1 overflow-hidden sm:-mx-6 lg:-mx-8">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden sm:rounded-sm grid grid-cols-3 gap-8">
          <div>
            <div class="transition duration-500 ease-in-out transform select-none bg-white dark:bg-gray-800 rounded-sm flex flex-row items-center">
              <div class="p-4 sm:px-6">
                <h3 class="text-2xl leading-6 font-semibold text-primary-dark">
                  Account Filters
                </h3>
                <div>
                  <p class="mt-5 max-w-2xl font-light text-md text-gray-800">
                    Account Type
                  </p>
                  <label class="block items-center py-1">
                    <input type="checkbox" class="rounded text-xs font-light text-primary-base focus:ring-0" />
                    <span class="ml-2 text-sm font-light text-gray-500">Option 1</span>
                  </label>
                </div>
                
                <p class="mt-5 max-w-2xl font-light text-sm text-gray-600">
                  Account Tags
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <ul class="flex flex-col">
              <li v-for="(account, id) in accountData" :key="id"  class="mb-2">
                <div @click="openAccountProfileCard(account)" class="transition duration-500 ease-in-out transform select-none cursor-pointer bg-white dark:bg-gray-800 rounded-sm flex flex-row items-center">
                  <div class="p-4 sm:px-6">
                    <h3 class="text-lg leading-6 font-semibold text-primary-dark">
                      {{ account.name }}
                    </h3>
                    <p class="mt-1 max-w-2xl font-light text-sm text-gray-600">
                      {{ account.description }}
                    </p>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" :class="[{ transform: account.accountCardOpen },{ 'rotate-90': account.accountCardOpen}]" class="absolute right-2.5" viewBox="0 0 24 24">
                      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                  </button>
                </div>
                <div :class="[{ hidden: !account.accountCardOpen }]" class="bg-white overflow-hidden rounded-sm flex flex-col">
                  <div class="">

                    <dl>
                      
                      <div class="bg-gray-50 px-6 py-1 text-gray-500 font-light text-xs text-right">
                        <a href="" @click.prevent="openDeleteAccountModal" class="underline outline-none focus:outline-none">Remove Account</a>
                      </div>

                      <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                        <dt class="py-2 block text-sm font-light text-gray-500">
                          Account Name
                        </dt>
                        <input v-model="account.name" class="p-1 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                      </div>

                      <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                        <dt class="py-2 block text-sm font-light text-gray-500">
                          Account Description
                        </dt>
                        <input v-model="account.description" class="p-1 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                      </div>

                      <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                        <dt class="py-2 block text-sm font-light text-gray-500">
                          Account Type
                        </dt>
                        <input v-model="account.type" class="p-1 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                      </div>

                      <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                        <dt class="py-2 block text-sm font-light text-gray-500">
                          Current Balance
                        </dt>
                        <input v-model="account.currentBalance" class="p-1 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                      </div>

                      <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                        <dt class="py-2 block text-sm font-light text-gray-500">
                          Monthly Payment
                        </dt>
                        <input v-model="account.minimumPayment" class="p-1 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
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
    <DeleteAccountModal v-show="deleteAccountModalOpen" v-on:closeDeleteAccountModal="closeDeleteAccountModal"/>
  </div>
</template>

<script>

import DeleteAccountModal from '../components/DeleteAccountModal.vue'

export default {
  name: 'Accounts',
    data: () => ({
        title: "Accounts",
        accountCardOpen: false,
        deleteAccountModalOpen: false
    }),
    components: {
      DeleteAccountModal
    },
    props: [
      'accountData'
    ],
    methods: {
        openAccountProfileCard(account) {
            account.accountCardOpen = !account.accountCardOpen
        },
        openDeleteAccountModal: function() {
          this.deleteAccountModalOpen = !this.deleteAccountModalOpen
        },
        closeDeleteAccountModal: function() {
          this.deleteAccountModalOpen = false
        },
    },
    computed: {
    }
}
</script>