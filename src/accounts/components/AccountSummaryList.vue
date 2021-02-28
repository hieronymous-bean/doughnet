<template>
  <div class="bg-white-base p-4 md:flex">
    <div class="w-full">
      <h3 class="font-semibold text-2xl">Tracked Accounts</h3>
      <p>All of the accounts you are currently tracking.</p>
      <ul class="account-item w-full accordion-arrow">
        <li v-for="(accountType, index) in accountTypes" :key="index" class="">
          <AccountTypeHeader :typeOfAccount="accountType" :accountData="accounts"/>
        </li>
      </ul>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>
  </div>
</template>

<script>

import { createAccount, deleteAccount } from '../utilities/accountUtilities.js'
import CreateAccountModal from './CreateAccountModal.vue'
import AccountTypeHeader from './AccountTypeHeader.vue'

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