<template>
  <nav class="bg-theme-primary-base">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-14">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-12 w-auto" src="../../global/assets/img/logo.png" alt="Workflow">
            <img class="hidden lg:block h-9 w-auto" src="../../global/assets/img/logo.png" alt="Workflow">
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/dashboard" class="text-white-base px-3 py-2 rounded-md text-sm font-semibold">Dashboard</router-link>
              <router-link to="/accounts" class="text-white-base px-3 py-2 rounded-md text-sm font-semibold">Accounts</router-link>
              <router-link to="/transactions" class="text-white-base px-3 py-2 rounded-md text-sm font-semibold">Transactions</router-link>
              <router-link to="/tools" class="text-white-base px-3 py-2 rounded-md text-sm font-semibold">Tools</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block ml-1 flex items-center">
          <button @click.prevent="openCreateAccountModal" type="button" class="py-2 px-5 flex justify-center items-center border-0 bg-theme-primary-three hover:bg-theme-primary-light focus:ring-0 text-white-base w-full text-center text-xs font-semibold focus:outline-none rounded-md transition duration-300 ease-in-out">
            + Add New Account
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <NotificationsMenuDropdown/>
          <div class="ml-3 relative">
            <div @click.prevent="toggleUserMenu" v-click-outside="closeUserMenu">
              <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none" id="user-menu" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>
            <div v-show="userMenuOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-sm shadow-md py-1 bg-white-base" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</router-link>
              <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</router-link>
              <a href="#" @click="userSignOut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/dashboard" class="block text-white-base px-3 py-2 rounded-md text-sm font-semibold">Dashboard</router-link>
        <router-link to="/accounts" class="block text-white-base px-3 py-2 rounded-md text-sm font-semibold">Accounts</router-link>
      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>
  </nav>
</template>

<script>
import { createAccount } from '../../accounts/utilities/accountUtilities.js'
import NotificationsMenuDropdown from '../components/NotificationsMenuDropdown.vue'
import CreateAccountModal from '../../accounts/components/CreateAccountModal.vue'

export default {
  data: function() {
    return {
      userMenuOpen: false,
      createAccountModalOpen: false,
    }
  },
  components: {
    CreateAccountModal,
    NotificationsMenuDropdown
  },
  props: [
  ],
  methods: {
    toggleUserMenu: function() {
      this.userMenuOpen = !this.userMenuOpen
    },
    closeUserMenu: function() {
      this.userMenuOpen = false
    },
    userSignOut: function() {
      this.$store.dispatch('logOut','')
    },
    openCreateAccountModal: function() {
      this.userMenuOpen = false
      this.createAccountModalOpen = !this.createAccountModalOpen
    },
    createNewAccount: function(accountData) {
      createAccount(accountData).then(response => {
        this.createAccountModalOpen = false;
        this.$emit('refreshAccountData');
        return response;
      });
    },
  },
} 
</script>