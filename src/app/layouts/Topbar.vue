  <template>

  <div class="">
    <div class="">
      <div class="px-4">
        <div class="flex justify-between items-center py-3">
          <div class="relative text-gray-400">
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
              class="text-sm font-light bg-gray-100 focus:bg-gray-200 form-input sm:w-64 rounded-sm pl-10 pr-4 py-3 border-none outline-none focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
              type="text"
              placeholder="Search"
            />
          </div>
          <div class="flex lg:w-0 lg:flex-1">
          </div>
          
          <div class="md:hidden">
            <button @click.prevent="openMobileMenu" type="button" class="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div class="hidden md:block z-50">
              <div class="ml-1 flex items-center">

                <button @click.prevent="openCreateAccountModal" type="button" class="py-2 px-8 flex justify-center items-center bg-gray-100 hover:bg-gray-200 focus:ring-0 text-gray-700 w-full text-center text-sm font-regular focus:outline-none rounded-sm transition duration-300 ease-in-out">
                   + Add New Account
                </button>

                <NotificationsDropdown/>
                
                <div class="ml-1" v-click-outside="closeUserMenu">
                  <button @click="toggleUserMenu" type="button" class="flex items-center justify-center w-full rounded-sm px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-50 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-100 focus:ring-0 focus:outline-none transition duration-300 ease-in-out">
                    <svg width="20" fill="currentColor" height="20" class="text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                      </path>
                    </svg>
                  </button>

                  <div v-show="userMenuOpen" class="absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-sm shadow-xl py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
                    <router-link
                      class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/profile"
                    >Profile</router-link>
                    <router-link
                      class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/settings"
                    >Account Settings</router-link>
                    <a href="" @click="userSignOut" class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div :class="mobileMenuOpen ? 'hidden' : ''" class="absolute z-50 top-0 inset-x-0 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                
              </div>
              <div class="-mr-2">
                <button @click.prevent="openMobileMenu" type="button" class="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>

            </div>
            <div>
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>

  </div>
</template>

<script>
import { createAccount, deleteAccount } from '../../accounts/utilities/accountUtilities.js'
import CreateAccountModal from '../../accounts/components/CreateAccountModal.vue'
import NotificationsDropdown from '../components/NotificationsDropdown.vue'
export default {
    data: function() {
        return {
          userEmail: this.$store.state.userEmail,
          test: 'testing',
          title: 'title',
          mobileMenuOpen: false,
          userMenuOpen: false,
          createAccountModalOpen: false,
          notificationsDropdown: false
        }
    },
    components: {
      CreateAccountModal,
      NotificationsDropdown
    },
    props: [
    ],
    methods: {
      openMobileMenu: function() {
        this.mobileMenuOpen = !this.mobileMenuOpen
      },
      toggleUserMenu: function() {
        this.userMenuOpen = !this.userMenuOpen
      },
      closeUserMenu: function() {
        this.userMenuOpen = false
      },
      userSignOut: function(e) {
        e.preventDefault;
        this.$store.dispatch('logOut','')
      },
      openCreateAccountModal: function() {
        this.userMenuOpen = false
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
        },
    },
} 
</script>