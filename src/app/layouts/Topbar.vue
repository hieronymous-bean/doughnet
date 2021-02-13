<template>
  <div class="flex-1 flex flex-col overflow-hidden border-b border-gray-lightest font-poppins">
    <nav class="bg-white">
      <div class="mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center py-3">
            <img src="../../global/assets/img/doughnet-logo.png" class="w-36 ">
              <div class="hidden md:block">

                <div class="ml-20 flex items-baseline space-x-4">
                  <div class="relative mx-4 lg:mx-0 text-gray-400">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg class="h-5 w-5 text-primary-base" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <input
                      class="text-sm font-light bg-gray-100 form-input w-32 sm:w-64 rounded-md pl-10 pr-4 py-3 focus:outline-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">

                <button @click.prevent="openCreateAccountModal" type="button" class="py-2 px-8 mx-4 flex justify-center items-center bg-gray-50 hover:bg-gray-100 focus:ring-primary-base text-gray-700 w-full transition ease-in duration-200 text-center text-sm font-regular focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                   + Add New Account
                </button>

                <button class="bg-gray-50 p-1 mx-4 rounded-full text-gray-500 hover:bg-gray-100 focus:ring-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2">
                  <span class="sr-only">View notifications</span>
                  <svg class="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                <div class="ml-3 relative">
                  <button @click="toggleUserMenu" type="button" class="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-50 bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-100 focus:ring-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2" id="options-menu">
                    <svg width="20" fill="currentColor" height="20" class="text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                      </path>
                    </svg>
                  </button>

                  <div v-show="userMenuOpen" class="fixed origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
                    <router-link
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/profile"
                    >Profile</router-link>
                    <router-link
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/settings"
                    >Account Settings</router-link>
                    <a href="" @click="userSignOut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CreateAccountModal v-show="createAccountModalOpen" v-on:closeModal="openCreateAccountModal"/>

    </div>
</template>

<script>
import CreateAccountModal from '../../accounts/components/CreateAccountModal.vue'
export default {
    data: function() {
        return {
          userEmail: this.$store.state.userEmail,
          test: 'testing',
          title: 'title',
          userMenuOpen: false,
          createAccountModalOpen: false
        }
    },
    components: {
      CreateAccountModal
    },
    props: [
    ],
    methods: {
      toggleUserMenu: function() {
        this.userMenuOpen = !this.userMenuOpen
      },
      userSignOut: function(e) {
        e.preventDefault;
        this.$store.dispatch('logOut','')
      },
      openCreateAccountModal: function() {
        this.createAccountModalOpen = !this.createAccountModalOpen
      }
    },
} 
</script>