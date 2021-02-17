<template>
  <div class="">
    <div class="my-1 overflow-hidden">
      <div class="min-w-full">
        <div class="mt-1 pb-4 px-6">
          <h1 class="inline-block text-4xl font-normal">All Tracked Accounts</h1>
          <button @click.prevent="openCreateAccountModal" type="button" class="w-full float-right inline-block rounded-md border border-transparent px-5 py-1 bg-secondary-two font-medium text-black hover:bg-secondary-two focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-md">
          + Add Account
          </button>
        </div>
        <div class="overflow-hidden flex">
          <div class="w-1/6 inline-block">
            <div class="transition duration-500 ease-in-out transform select-none bg-gray-50 dark:bg-gray-800 rounded border">
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
                <AccountItemEdit v-show="account.type == this.activeAccountFilter || this.activeAccountFilter == ''" :account="account" v-on:refreshAccountData="$emit('refreshAccountData')"/>
              </li>
            </ul>
          </div>
          <div class="w-1/6 inline-block ">
            <div class="select-none bg-secondary-five">
              <div class="p-4 sm:px-6">
                <h4 class="text-xl leading-6 font-semibold text-black">
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
import { createAccount } from '../utilities/accountUtilities.js'
import AccountItemEdit from '../components/AccountItemEdit.vue'
import CreateAccountModal from '../components/CreateAccountModal.vue'
import DeleteAccountModal from '../components/DeleteAccountModal.vue'

export default {
  name: 'Accounts',
    data: () => ({
        title: "Accounts",
        createAccountModalOpen: false,
        deleteAccountModalOpen: false,
        activeAccountFilter: '',
        activeFilterClass: 'text-white bg-primary-base font-medium fill-current focus:outline-none px-3 py-2',
        inactiveFilterClass: 'px-3 py-2 hover:bg-gray-50',
        selectedAccountId: ''
    }),
    components: {
      AccountItemEdit,
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
        }
    },
    computed: {
    }
}
</script>