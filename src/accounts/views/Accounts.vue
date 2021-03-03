<template>
  <div class="mx-auto">
    <div class="bg-white-tint">
      <div class="mx-auto overflow-x-hidden lg:px-10">
        
        <div class="lg:flex lg:items-center lg:justify-between py-8">
          <div class="flex-1 min-w-0">
            <h2 class="text-4xl font-extralight text-black-base">
              All Tracked Accounts
            </h2>
            <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                Sort By:
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <a v-for="(option, index) in this.sortMenuOptions" :key="index" :class="menuOptionSelected == option ? menuSelectedClass : ''" @click.prevent="menuOptionSelected = option" class="cursor-pointer pl-3">{{ option }}</a>
              </div>
            </div>
          </div>
          <div class="mt-5 flex lg:mt-0 lg:ml-4">

            <span class="sm:ml-3">
              <button @click.prevent="openCreateAccountModal" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white-base bg-theme-primary-four focus:outline-none">
                <svg class="fill-current text-white-base" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                <span class="pl-2">Add New Account</span>
              </button>
            </span>


          </div>
        </div>

        <div class="mx-auto">
          <div class="flex justify-between">
            

            <div class="w-2/6 inline-block">
              <div class="transition duration-500 ease-in-out transform select-none bg-white-base dark:bg-gray-800 shadow-md">
                <div class="py-4 px-6">
                  <h4 class="text-xl mb-2 leading-6 font-light text-black">
                    Account Types
                  </h4>
                  <div>
                    <ul class="text-gray-600 text-md font-extralight cursor-pointer capitalize">
                      <li @click="filterAccountList('all')" :class="[activeAccountFilter === '' ? activeFilterClass : inactiveFilterClass]">All Accounts</li>
                      <li :class="[activeAccountFilter === type ? activeFilterClass : inactiveFilterClass]" @click="filterAccountList(type)" v-for="(type, id) in loadedAccountTypes" :key="id">{{ type }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="select-none bg-white-base mt-5 shadow-md">
                <div class="p-4 sm:px-6">
                  <h4 class="text-xl leading-6 font-light text-black">
                    Account Summary
                  </h4>
                  <div>
                    <p class="mt-5 max-w-2xl font-extralight text-md text-gray-800">
                      Total Accounts: {{numberOfAccounts}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            

            <div class="w-4/6 inline-block mx-4 flex flex-wrap justify-between">
              <div v-for="(account, id) in loadedAccountData" :key="id" class="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-3 pb-4">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                  <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://images.unsplash.com/photo-1513336484130-80d71af9596c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyZXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
                    <div class="flex justify-end">
                      <svg class="fill-current text-white-base" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm5 3c0-2.761-2.238-5-5-5h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14zm-8 5c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-8 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm8-4c.343 0 .677.035 1 .101v-1.101c0-.552-.447-1-1-1s-1 .448-1 1v1.101c.323-.066.657-.101 1-.101zm-8 2c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm8 8c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-8 2c-.343 0-.677-.035-1-.101v1.101c0 .552.447 1 1 1s1-.448 1-1v-1.101c-.323.066-.657.101-1 .101z"/></svg>
                    </div>
                  </div>
                  <div class="p-4">
                    <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{{ account.name }}</p>
                    <p class="text-2xl text-gray-900">{{ account.currentBalance }}</p>
                    <p class="text-gray-700">{{ account.description }}</p>
                  </div> 
                  <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                    <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">{{ account.type }}</div>
                  </div>
                </div>
              </div>

            </div>
            


          </div>
        </div>

        <div class="my-1 overflow-hidden">
          <div class="min-w-full bg-theme-primary-lightest rounded-2xl">

            <div class="pb-4 px-6 text-sm font-normal">

            </div>

            <div class="overflow-hidden flex">
              
                
              
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

      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:accountCreated="refreshAccountData" v-on:closeModal="openCreateAccountModal"/>
  </div>
</template>

<script>
import AccountItemEdit from '../components/AccountItemEdit.vue'
import CreateAccountModal from '../components/CreateAccountModal.vue'

export default {
  name: 'Accounts',
    data: () => ({
      title: "Accounts",
      createAccountModalOpen: false,
      deleteAccountModalOpen: false,
      activeAccountFilter: '',
      activeFilterClass: 'text-theme-primary-base bg-primary-base font-light fill-current focus:outline-none px-3 py-2 transition duration-200 ease-in-out',
      inactiveFilterClass: 'px-3 py-2 hover:bg-gray-100 transition duration-200 ease-in-out',
      sortMenuOptions: ['Type','Created','Modified','Balance'],
      menuOptionSelected: 'Type',
      menuSelectedClass: 'underline',
    }),
    components: {
      AccountItemEdit,
      CreateAccountModal
    },
    props: [
      'loadedAccountData',
      'loadedAccountTypes'
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
        return this.loadedAccountData.length
      }
    }
}
</script>