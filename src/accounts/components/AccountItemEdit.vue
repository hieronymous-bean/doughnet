<template>
  <div class="mb-3 rounded-sm">
    <div class="grid grid-cols-2 select-none bg-secondary-two dark:bg-gray-800">
      <div @click.prevent="openAccountProfileCard" class="cursor-pointer py-2 sm:px-6 relative">
        <p class="mt-1 font-light text-sm text-gray-800 inline-block">
          {{ account.type }}
        </p>
      </div>
      <div @click.prevent="openAccountItemMenu" v-click-outside="closeAccountItemMenu" class="cursor-pointer py-2 sm:px-6 text-right relative">
        <p class="mt-1 font-light text-sm text-gray-800">
          Menu
        </p>
        <div v-show="accountItemMenuOpen" class="absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
          <a href="" @click.prevent="saveAccountUpdates(account.id)" class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Save Changes</a>
          <a href="" @click.prevent="openDeleteAccountModal" class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delete Account</a>
        </div>
      </div>
    </div>
    <div @click.prevent="openAccountProfileCard" class="grid grid-cols-2 select-none bg-secondary-four dark:bg-gray-800">
      <div class="cursor-pointer py-2 sm:px-6">
        <h3 class="text-xl leading-6 font-semibold text-black">
          {{ account.name }}
        </h3>
        <p class="mt-1 font-light text-sm text-gray-800">
          {{ account.description }}
        </p>
      </div>
      <div class="cursor-pointer py-2 sm:px-6 text-right">
        <p class="mt-1 font-light text-sm text-gray-400">
          Added: MM/DD/YYYY
        </p>
      </div>
    </div>
    <div :class="[{ hidden: !accountCardOpen }]" class="bg-gray-50 overflow-hidden rounded-sm py-2">
      <div>
        <dl>
          <div class="px-6 py-2 grid grid-cols-4">
            <dt class="py-2 block text-sm font-light text-gray-500">
              Account Name
            </dt>
            <input v-model="accountName" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
          </div>
          <div class="px-6 py-2 grid grid-cols-4">
            <dt class="py-2 block text-sm font-light text-gray-500">
              Account Description
            </dt>
            <input v-model="accountDescription" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
          </div>
          <div class="px-6 py-2 grid grid-cols-4">
            <dt class="py-2 block text-sm font-light text-gray-500">
              Account Type
            </dt>
            <input v-model="accountType" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
          </div>
          <div class="px-6 py-2 grid grid-cols-4">
            <dt class="py-2 block text-sm font-light text-gray-500">
              Current Balance
            </dt>
            <input v-model="accountBalance" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
          </div>
          <div class="px-6 py-2 grid grid-cols-4">
            <dt class="py-2 block text-sm font-light text-gray-500">
              Monthly Payment
            </dt>
            <input v-model="accountPayment" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
          </div>
        </dl>
      </div>
    </div>
    <DeleteAccountModal :accountId="account.id" v-show="deleteAccountModalOpen" v-on:deleteCurrentAccount="deleteAccount" v-on:closeDeleteModal="closeDeleteAccountModal"/>
  </div>
</template>

<script>
import { updateAccount, deleteAccount } from '../utilities/accountUtilities.js'
import DeleteAccountModal from './DeleteAccountModal.vue'
export default {
  name: 'AccountItemEdit',
    data: () => ({
        title: "AccountItemEdit",
        accountCardOpen: false,
        accountItemMenuOpen: false,
        deleteAccountModalOpen: false,
        selectedAccountId: ''
    }),
    components: {
      DeleteAccountModal
    },
    props: [
      'account'
    ],
    created: function() {
      this.accountName = this.account.name;
      this.accountDescription = this.account.description;
      this.accountType = this.account.type;
      this.accountBalance = this.account.currentBalance;
      this.accountPayment = this.account.minimumPayment;
    },
    methods: {
      openAccountProfileCard() {
        this.accountCardOpen = !this.accountCardOpen
      },
      openAccountItemMenu() {
          this.accountItemMenuOpen = !this.accountItemMenuOpen
      },
      closeAccountItemMenu() {
          this.accountItemMenuOpen = false;
      },
      openDeleteAccountModal: function() {
          this.deleteAccountModalOpen = !this.deleteAccountModalOpen
        },
        closeDeleteAccountModal: function() {
          this.deleteAccountModalOpen = false
        },
      deleteAccount: function(id) {
        deleteAccount(id).then(response => {
          this.deleteAccountModalOpen = false;
          this.$emit('refreshAccountData');
          return response;
        });
      },
      saveAccountUpdates: function(id) {
        const accountPayload = {
          user: this.$store.getters.getCurrentUserId,
          id: id,
          name: this.accountName,
          description: this.accountDescription,
          type: this.accountType,
          currentBalance: this.accountBalance,
          minimumPayment: this.accountPayment
        }
        console.log(accountPayload);
        updateAccount(accountPayload).then(response => {
          this.$emit('refreshAccountData');
          return response;
        })
      }
    },
    computed: {
    }
}
</script>