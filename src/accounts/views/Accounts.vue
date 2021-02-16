<template>
  <div class="">
    <div class="my-1 overflow-hidden">
      <div class="min-w-full">
        <div class="mt-1 pb-4 px-6">
          <h1 class="inline-block text-4xl font-normal">All Tracked Accounts</h1>
          <button @click.prevent="openCreateAccountModal" type="button" class="w-full float-right inline-block rounded-md border border-transparent px-4 py-1 bg-secondary-two font-regular text-black hover:bg-secondary-two focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
          + Add Account
          </button>
        </div>
        <div class="overflow-hidden flex">
          <div class="w-1/6 inline-block">
            <div class="transition duration-500 ease-in-out transform select-none bg-white dark:bg-gray-800 rounded border">
              <div class="py-4 sm:px-6">
                <h4 class="text-xl mb-2 leading-6 font-semibold text-primary-darkest">
                  Accounts
                </h4>
                <div>
                  <ul class="text-gray-600 text-md cursor-pointer capitalize">
                    <li @click="filterAccountList('all')" :class="[activeAccountFilter === '' ? activeFilterClass : inactiveFilterClass]">All Accounts</li>
                    <li :class="[activeAccountFilter === type ? activeFilterClass : inactiveFilterClass]" @click="filterAccountList(type)" v-for="(type, id) in accountTypes" :key="id">{{ type }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-4/6 inline-block mx-4">
            <ul class="">
              <li v-for="(account, id) in accountData" :key="id"  class="">
                <div v-show="account.type == this.activeAccountFilter || this.activeAccountFilter == ''" class="border mb-3 rounded">
                  <div @click="openAccountProfileCard(account)" class="transition duration-500 ease-in-out transform select-none cursor-pointer bg-white dark:bg-gray-800 rounded-sm">
                    <div class="pt-5 sm:px-6">
                      <h3 class="text-lg leading-6 font-semibold text-primary-darkest">
                        {{ account.name }}
                      </h3>
                      <p class="mt-1 max-w-2xl font-light text-sm text-gray-800">
                        {{ account.description }}
                      </p>
                    </div>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" :class="[{ transform: account.accountCardOpen },{ 'rotate-90': account.accountCardOpen}]" class="absolute right-2.5 top-1/2 fill-current text-primary-light" viewBox="0 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                      </svg>
                    </button>
                  </div>
                  <div :class="[{ hidden: !account.accountCardOpen }]" class="bg-white overflow-hidden rounded-sm">
                    <div class="">

                      <dl>
                        
                        <div class="bg-gray-50 px-6 py-3 text-gray-500 font-light text-xs text-right">
                          <a href="" @click.prevent="openDeleteAccountModal" class="rounded-full bg-gray-100 text-gray-400 font-semibold py-1 px-3 mx-3">Save Changes</a>
                          <a href="" @click.prevent="openDeleteAccountModal(account.id)" class="rounded-full bg-red-100 text-red-800 font-semibold py-1 px-3 mx-3">Remove Account</a>
                        </div>

                        <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                          <dt class="py-2 block text-sm font-light text-gray-500">
                            Account Name
                          </dt>
                          <input ref="accountName" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                        </div>

                        <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                          <dt class="py-2 block text-sm font-light text-gray-500">
                            Account Description
                          </dt>
                          <input ref="accountDescription" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                        </div>

                        <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                          <dt class="py-2 block text-sm font-light text-gray-500">
                            Account Type
                          </dt>
                          <input ref="accountType" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                        </div>

                        <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                          <dt class="py-2 block text-sm font-light text-gray-500">
                            Current Balance
                          </dt>
                          <input ref="currentBalance" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                        </div>

                        <div class="bg-gray-50 px-6 py-1 grid grid-cols-4">
                          <dt class="py-2 block text-sm font-light text-gray-500">
                            Monthly Payment
                          </dt>
                          <input ref="minimumPayment" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-1/6 inline-block ">
            <div class="transition duration-500 border ease-in-out transform select-none bg-white dark:bg-gray-800 rounded-sm">
              <div class="p-4 sm:px-6">
                <h4 class="text-xl leading-6 font-semibold text-primary-darkest">
                  Summary of Accounts
                </h4>
                <div>
                  <p class="mt-5 max-w-2xl font-light text-md text-gray-800">
                 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>
    <DeleteAccountModal :accountId="selectedAccountId" v-show="deleteAccountModalOpen" v-on:deleteCurrentAccount="deleteAccount" v-on:closeDeleteModal="closeDeleteAccountModal"/>
  </div>
</template>

<script>
import { createAccount, deleteAccount } from '../utilities/accountUtilities.js'
import CreateAccountModal from '../components/CreateAccountModal.vue'
import DeleteAccountModal from '../components/DeleteAccountModal.vue'

export default {
  name: 'Accounts',
    data: () => ({
        title: "Accounts",
        accountCardOpen: false,
        createAccountModalOpen: false,
        deleteAccountModalOpen: false,
        activeAccountFilter: '',
        activeFilterClass: 'text-white bg-primary-base font-medium fill-current focus:outline-none px-3 py-2',
        inactiveFilterClass: 'px-3 py-2 hover:bg-gray-50',
        selectedAccountId: ''
    }),
    components: {
      CreateAccountModal,
      DeleteAccountModal
    },
    props: [
      'accountData',
      'accountTypes'
    ],
    methods: {
        openAccountProfileCard(account) {
            account.accountCardOpen = !account.accountCardOpen
        },
        openCreateAccountModal: function() {
          this.createAccountModalOpen = !this.createAccountModalOpen
        },
        openDeleteAccountModal: function(id) {
          this.selectedAccountId = id;
          this.deleteAccountModalOpen = !this.deleteAccountModalOpen
        },
        closeDeleteAccountModal: function() {
          this.deleteAccountModalOpen = false
        },
        filterAccountList: function(type) {
          if (type == 'all') {
            this.activeAccountFilter = ''
          } else {
            this.activeAccountFilter = type;
          }
          return this.activeAccountFilter;
          
        },
        createNewAccount: function(accountData) {
          createAccount(accountData).then(response => {
            this.createAccountModalOpen = false;
            this.$emit('refreshAccountData');
            return response;
          });
        },
        deleteAccount: function(accountId) {
          deleteAccount(accountId).then(response => {
            this.deleteAccountModalOpen = false;
            this.$emit('refreshAccountData');
            return response;
          });
        },
    },
    computed: {
    }
}
</script>