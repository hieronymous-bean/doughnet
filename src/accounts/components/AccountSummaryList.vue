<template>
  <div class="bg-white rounded-sm border">
    <div class="px-5 py-3 flex relative">
      <h2 class="flex-1 font-poppins">
        <span class="block text-4xl font-bold text-black">Tracked Accounts</span>
        <span class="block text-lg font-light text-black">All of your currently active accounts that you're tracking.</span>
      </h2>
      <div v-click-outside="closeAccountCardMenu">
        <div class="flex-2">
          <button class="focus:outline-none" @click="toggleAccountCardMenu">
            <svg :class="[{ transform: cardMenuOpen },{ '-rotate-45': cardMenuOpen}]" class="fill-current text-primary-dark transition duration-500 ease-in-out"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
          </button>
        </div>
        <div v-show="cardMenuOpen" class="absolute right-0 mt-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
          <a href="" @click.prevent="openCreateAccountModal" class="outline-none focus:outline-none block px-4 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">+ Add New Account</a>
          <router-link
            class="outline-none focus:outline-none block px-4 py-2 text-sm text-black hover:bg-gray-100"
            to="/accounts"
          >
          Edit Accounts</router-link>
        </div>
      </div>
    </div>
    <div class="flex-1 mb-4">
      <div class="flex-1">
        <ul class="account-item w-full accordion-arrow px-2">
          <li v-for="(accountType, index) in accountTypes" :key="index" class="items-center mb-3 font-light px-3">
            <AccountTypeHeader :typeOfAccount="accountType" :accountData="accounts"/>
          </li>
        </ul>
      </div>
    </div>

    <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>

  </div>
</template>



<script>
import { createAccount, deleteAccount } from '../utilities/accountUtilities.js'
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
        this.cardMenuOpen = false
        this.createAccountModalOpen = !this.createAccountModalOpen
      },
      closeCreateAccountModal: function() {
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
      }
    },
    computed: {

    }
} 

</script>