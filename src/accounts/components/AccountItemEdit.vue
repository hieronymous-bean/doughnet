<template>
  <div class="mb-6 rounded-sm ">
    <div class="grid grid-cols-2 select-none bg-gray-light border-r border-t border-l border-gray-base rounded-t-3xl">
      <div @click.prevent="openAccountProfileCard" class="cursor-pointer py-2 sm:px-6 relative">
        <p class="mt-1 font-light text-sm text-black-base inline-block">
          {{ account.type }}
        </p>
      </div>
      <div v-click-outside="closeAccountItemMenu" class="py-2 sm:px-6 text-right relative">
        <button @click.prevent="openAccountItemMenu" class="focus:outline-none align-middle" @click="toggleAccountCardMenu">
            <svg class="fill-current text-gray-base hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
          </button>
        <div v-show="accountItemMenuOpen" class="absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-sm shadow-xl py-1 bg-white-base ring-0 border border-gray-base rounded-xl" role="menu" aria-orientation="vertical">
          <a href="" @click.prevent="saveAccountUpdates(account.id)" class="block outline-none focus:outline-none text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Save Changes</a>
          <a href="" @click.prevent="openDeleteAccountModal" class="block outline-none focus:outline-none text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delete Account</a>
        </div>
      </div>
    </div>
    <div :class="[{ 'rounded-b-3xl': !accountCardOpen }]" @click.prevent="openAccountProfileCard" class="grid grid-cols-2 select-none bg-white-base border border-gray-base dark:bg-gray-800">
      <div class="cursor-pointer py-4 sm:px-6">
        <h3 class="text-2xl leading-6 font-light text-black">
          {{ account.name }}
        </h3>
        <p class="mt-1 font-light text-sm text-gray-800">
          {{ account.description }}
        </p>
      </div>
      <div class="cursor-pointer py-2 sm:px-6 text-right">
        <p class="mt-1 font-light text-sm text-gray-500">
          Added: <span class="font-semibold">{{formatCreatedDate}}</span>
        </p>
      </div>
    </div>
    <div :class="[{ hidden: !accountCardOpen }]" class="bg-gray-50 overflow-hidden border-r border-b border-l border-gray-base rounded-sm py-2 rounded-b-3xl">
      <div>
        <dl>
          <div class="px-6 py-2 grid grid-cols-4">
            <div class="mx-2">
              <dt class="py-1 block text-sm font-light text-gray-500">
                Account Name
              </dt>
              <input v-model="accountName" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>

            <div class="mx-2 col-span-2">
              <dt class="py-1 block text-sm font-light text-gray-500">
                Account Description
              </dt>
              <input v-model="accountDescription" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>

            <div class="mx-2">
              <dt class="py-1 block text-sm font-light text-gray-500">
                Account Type
              </dt>
              <input v-model="accountType" disabled class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>
          </div>

          <div class="px-6 py-2 grid grid-cols-3">
            <div class="mx-2">
              <dt class="py-2 block text-sm font-light text-gray-500">
              Current Balance
            </dt>
            <input v-model="accountBalance" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>

            <div class="mx-2">
              <dt class="py-2 block text-sm font-light text-gray-500">
              Monthly Payment
            </dt>
            <input v-model="accountPayment" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>

            <div class="mx-2">
              <dt class="py-2 block text-sm font-light text-gray-500">
              Interest %
            </dt>
            <input v-model="accountInterestRate" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
            </div>
          </div>

          <div class="px-6 py-2 grid grid-cols-4">
            
          </div>
          <div class="px-6 py-2 grid grid-cols-4">
            
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
    computed: {
      formatCreatedDate: function() {
        let date = new Date(this.account.createdDate)
        let newDate = date.toLocaleString()
        return newDate
      }
    },
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
          this.accountCardOpen = false;
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
        updateAccount(accountPayload).then(response => {
          this.accountCardOpen = false;
          this.$emit('refreshAccountData');
          return response;
        })
      }
    }
}
</script>