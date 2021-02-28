<template>
  <nav class="bg-theme-primary-base">
    <div class="mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="justify-center text-center">
              <img class="block lg:hidden h-12 w-auto" src="../../global/assets/img/logo.png" alt="Workflow">
              <img class="hidden lg:block h-9 w-auto" src="../../global/assets/img/logo.png" alt="Workflow">
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center ml-10">
              <input type="text" class="hidden px-4 py-2 text-sm text-white placeholder-white bg-theme-primary-two rounded-sm focus:outline-none lg:block" placeholder="Search...">
              <router-link to="/dashboard" :class="[$route.name === 'Dashboard' ? activeNavLink : '']" class="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-theme-primary-baseTint focus:outline-none">Dashboard
              </router-link>
              <router-link to="/accounts" :class="[$route.name === 'Accounts' ? activeNavLink : '']" class="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-theme-primary-baseTint focus:outline-none">Accounts</router-link>
              <router-link to="/transactions" :class="[$route.name === 'Transactions' ? activeNavLink : '']" class="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-theme-primary-baseTint focus:outline-none">Transactions</router-link>
              <router-link to="/tools" :class="[$route.name === 'Tools' ? activeNavLink : '']" class="px-3 py-2 ml-4 text-sm font-semibold text-gray-300 rounded-md hover:text-white hover:bg-theme-primary-baseTint focus:outline-none">Tools</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="mr-3" v-click-outside="closeAssetMenu">
              <a @click.prevent="toggleAssetMenu" class="flex cursor-pointer items-center hover:text-gray-400">
                <svg class="fill-current text-gray-400 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg class="h-2 ml-1 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.257 386.257"
                    xml:space="preserve">
                    <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
                </svg>
              </a>
              <div v-show="assetMenuOpen" class="fixed origin-top-right right-0 mt-2 px-3 py-1 w-48 rounded-sm shadow-md py-1 bg-white-base" role="menu" aria-orientation="vertical">
                <a @click.prevent="openCreateAccountModal" type="button" class="block cursor-pointer outline-none focus:outline-none px-4 py-1 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Add Account</a>
              </div>
            </div>
            <NotificationsMenuDropdown/>
            <div @click.prevent="toggleUserMenu" v-click-outside="closeUserMenu" class="relative ml-3">
              <div>
                <button class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <img class="w-8 h-8 rounded-full" src="../../global/assets/img/robot-avatars/RobotAvatars_12.svg" alt="" />
                </button>
                <div v-show="userMenuOpen" class="absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-sm shadow-md bg-white-base" role="menu" aria-orientation="vertical">
                  <router-link
                    class="block outline-none focus:outline-none px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    to="/profile"
                  >Profile</router-link>
                  <router-link
                    class="block outline-none focus:outline-none px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                    to="/settings"
                  >Account Settings</router-link>
                  <a href="" @click="userSignOut" class="block outline-none focus:outline-none px-4 py-1 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <button class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <svg class="block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:accountCreated="refreshAccountData" v-on:closeModal="openCreateAccountModal"/>
  </nav>
</template>

<script>
import { createAccount } from '../../accounts/utilities/accountUtilities.js'
import NotificationsMenuDropdown from '../components/NotificationsMenuDropdown.vue'
import CreateAccountModal from '../../accounts/components/CreateAccountModal.vue'

export default {
  data: function() {
    return {
      assetMenuOpen: false,
      userMenuOpen: false,
      createAccountModalOpen: false,
      activeNavLink: 'underline'
    }
  },
  components: {
    CreateAccountModal,
    NotificationsMenuDropdown
  },
  props: [
  ],
  methods: {
    toggleAssetMenu: function() {
      this.assetMenuOpen = !this.assetMenuOpen
    },
    closeAssetMenu: function() {
      this.assetMenuOpen = false
    },
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