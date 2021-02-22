<template>
  <div class="select-none">
    <div class="my-1 overflow-hidden">
      <div class="min-w-full">
        <div class="mt-1 pb-2 px-6">
          <h1 class="inline-block text-4xl font-bold text-black">All Tracked Accounts</h1>
          <button @click.prevent="openCreateAccountModal" type="button" class="w-full float-right inline-block rounded-md border border-transparent px-5 py-1 bg-secondary-two font-medium text-black hover:bg-secondary-two focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-md">
          + Add Account
          </button>
        </div>
        <div class="pb-4 px-6 text-sm font-normal">
          <h1 class="inline-block text-black">Sort By: </h1>
          <AccountItemSort v-for="(option, index) in this.sortMenuOptions" :key="index" :sortParam="option" :class="menuOptionSelected == option ? menuSelectedClass : ''" @click.prevent="menuOptionSelected = option" class="cursor-pointer"/>
        </div>

        <div class="overflow-hidden flex">
          <div class="w-2/6 inline-block">
            <div class="transition duration-500 ease-in-out transform select-none bg-gray-50 dark:bg-gray-800 rounded-sm">
              <div class="py-4 sm:px-6">
                <h4 class="text-xl mb-2 leading-6 font-semibold text-black">
                  Account Types
                </h4>
                <div>
                  <ul class="text-gray-600 text-md cursor-pointer capitalize">
                    <li @click="filterAccountList('all')" :class="[activeAccountFilter === '' ? activeFilterClass : inactiveFilterClass]">All Accounts</li>
                    <li :class="[activeAccountFilter === type ? activeFilterClass : inactiveFilterClass]" @click="filterAccountList(type)" v-for="(type, id) in accountTypes" :key="id">{{ type }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="select-none bg-gray-50 mt-5">
              <div class="p-4 sm:px-6">
                <h4 class="text-xl leading-6 font-semibold text-black">
                  Account Summary
                </h4>
                <div>
                  <p class="mt-5 max-w-2xl font-light text-md text-gray-800">
                    Total Accounts: {{numberOfAccounts}}
                  </p>
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
          
        </div>
      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:accountCreated="refreshAccountData" v-on:closeModal="openCreateAccountModal"/>
  </div>
</template>

<script>
import AccountItemEdit from '../components/AccountItemEdit.vue'
import AccountItemSort from '../components/AccountItemSort.vue'
import CreateAccountModal from '../components/CreateAccountModal.vue'

export default {
  name: 'Accounts',
    data: () => ({
      title: "Accounts",
      createAccountModalOpen: false,
      deleteAccountModalOpen: false,
      activeAccountFilter: '',
      activeFilterClass: 'text-white bg-primary-base font-medium fill-current focus:outline-none px-3 py-2 transition duration-200 ease-in-out',
      inactiveFilterClass: 'px-3 py-2 hover:bg-gray-100 transition duration-200 ease-in-out',
      sortMenuOptions: ['Type','Created','Modified','Balance'],
      menuOptionSelected: 'Type',
      menuSelectedClass: 'font-semibold underline',
    }),
    components: {
      AccountItemEdit,
      AccountItemSort,
      CreateAccountModal
    },
    props: [
      'accountData',
      'accountTypes'
    ],
    methods: {
      openCreateAccountModal: function() {
        this.createAccountModalOpen = !this.createAccountModalOpen
      },
      refreshAccountData: function() {
        this.$emit('refreshAccountData');
      },
      filterAccountList: function(type) {
        if (type == 'all') {
          this.activeAccountFilter = ''
        } else {
          this.activeAccountFilter = type;
        }
        return this.activeAccountFilter;
      },
      // sortAccountList: function(param) {

      // }
    },
    computed: {
      numberOfAccounts: function() {
        return this.accountData.length
      }
    }
}
</script>