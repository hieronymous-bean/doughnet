  <template>
  <div class="w-full block overflow-hidden font-poppins">
    <nav class="bg-white">
      <div class="mx-auto px-3">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center py-3">
              <div class="hidden md:block">

                <div class="flex items-baseline space-x-4">
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
                      class="text-sm font-light bg-gray-100 focus:bg-gray-200 form-input w-32 sm:w-64 rounded-sm pl-10 pr-4 py-3 border-none outline-none focus:outline-none focus:ring-0"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-1 flex items-center">

                <button @click.prevent="openCreateAccountModal" type="button" class="py-2 px-8 flex justify-center items-center bg-gray-100 hover:bg-gray-200 focus:ring-0 text-gray-700 w-full text-center text-sm font-regular focus:outline-none rounded-sm">
                   + Add New Account
                </button>

                <NotificationsDropdown/>
                
                <div class="ml-1" v-click-outside="closeUserMenu">
                  <button @click="toggleUserMenu" type="button" class="flex items-center justify-center w-full rounded-sm px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-50 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-100 focus:ring-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2" id="options-menu">
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
      </nav>

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