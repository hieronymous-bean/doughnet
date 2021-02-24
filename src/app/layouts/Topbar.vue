  <template>

  <div class="bg-white-base">
    <div class="">
      <div class="px-4">
        <div class="flex justify-between items-center py-2">
          <div class="relative text-gray-400">
            <img src="../../global/assets/img/logo.png" class="w-48">
          </div>

          <div class="relative text-gray-400">

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

                <button @click.prevent="openCreateAccountModal" type="button" class="py-2 px-8 flex justify-center items-center border-0 bg-theme-primary-base hover:bg-theme-primary-light focus:ring-0 text-white-base w-full text-center text-md font-semibold focus:outline-none rounded-md transition duration-300 ease-in-out">
                   + Add New Account
                </button>

                <NotificationsDropdown/>
                
                <div class="ml-1" v-click-outside="closeUserMenu">
                  <button @click="toggleUserMenu" type="button" class="flex items-center justify-center w-full rounded-full shadow-md px-4 py-2 text-sm font-medium text-primary-base dark:text-gray-50 bg-white-base hover:bg-theme-alice-base dark:hover:bg-theme-alice-base focus:ring-0 focus:outline-none transition duration-300 ease-in-out">
                    <svg width="20" fill="currentColor" height="20" class="text-theme-primary-base" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                      </path>
                    </svg>
                  </button>

                  <div v-show="userMenuOpen" class="absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-lg shadow-xl bg-white-base" role="menu" aria-orientation="vertical">
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
      </div>

      <div :class="mobileMenuOpen ? 'hidden' : ''" class="absolute z-50 top-0 inset-x-0 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-theme-shadow divide-y-2 divide-gray-50">
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