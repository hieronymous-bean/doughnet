<template>
  <div class="bg-white rounded-sm">
    <div class="px-6 py-5 flex relative">
      <h2 class="flex-1 font-poppins">
        <span class="block text-4xl font-semibold text-primary-dark pb-1">Accounts</span>
        <span class="block text-md font-light text-gray-800">All of your currently active accounts that you're tracking.</span>
      </h2>
      <div v-click-outside="closeAccountCardMenu">
        <div class="flex-2">
          <button class="focus:outline-none" @click="toggleAccountCardMenu">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z"/>
            </svg>
          </button>
        </div>
        <div v-show="cardMenuOpen" class="absolute right-0 mt-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
          <a href="" @click.prevent="openCreateAccountModal" class="outline-none focus:outline-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">+ Add New Account</a>
          <router-link
            class="outline-none focus:outline-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            to="/accounts"
          >
          Edit Accounts</router-link>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex-1">
        <ul class="account-item w-full accordion-arrow px-3">
          <li v-for="(accountType, index) in accountTypes" :key="index" class="items-center my-3 font-light px-3">
            <AccountTypeHeader :typeOfAccount="accountType" :accountData="accounts"/>
          </li>
        </ul>
      </div>
    </div>

    <CreateAccountModal v-show="createAccountModalOpen" v-on:closeModal="openCreateAccountModal"/>

  </div>
</template>



<script>

import AccountTypeHeader from './AccountTypeHeader.vue'
import CreateAccountModal from './CreateAccountModal.vue'

export default {
  data: function() {
    return {
      name: 'AccountSummaryList',
      title: 'AccountSummaryList',
      cardMenuOpen: false,
      createAccountModalOpen: false
    }
  },
  components: {
    AccountTypeHeader,
    CreateAccountModal
  },
    props: [
      'accounts',
      'accountTypes',
      'typeExpanded'
    ],
    methods: {
      toggleAccountCardMenu: function() {
        this.cardMenuOpen = !this.cardMenuOpen
      },
      closeAccountCardMenu: function() {
        this.cardMenuOpen = false
      },
      openCreateAccountModal: function() {
        this.createAccountModalOpen = !this.createAccountModalOpen
      }
    },
    computed: {

    }
} 

</script>