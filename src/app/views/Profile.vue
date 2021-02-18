<template>
  <div class="">
    <div class="my-1 overflow-hidden">
      <div class="min-w-full">
        <div class="mt-1 pb-4 px-6">
          <h1 class="inline-block text-4xl font-bold text-black">Your Profile</h1>
        </div>
        <div class="overflow-hidden flex">
          <div class="w-full inline-block">
            <div class="transition duration-500 ease-in-out transform select-none bg-gray-50 dark:bg-gray-800 rounded-sm">
              <div class="py-4 sm:px-6">
                <h4 class="text-xl mb-2 leading-6 font-semibold text-primary-darkest">
                  Personal Info
                </h4>
                <div>
                  <div class="bg-gray-50 overflow-hidden rounded-sm py-2">
                    <div>
                      <dl>
                        <div class="px-6 py-2 grid grid-cols-4">
                          <div class="mx-2">
                            <dt class="py-1 block text-sm font-light text-gray-500">
                              First Name
                            </dt>
                            <input v-model="userFirstName" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                          </div>

                          <div class="mx-2">
                            <dt class="py-1 block text-sm font-light text-gray-500">
                              Last Name
                            </dt>
                            <input v-model="userLastName" class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                          </div>

                          <div class="mx-2">
                            <dt class="py-1 block text-sm font-light text-gray-500">
                              Email Address
                            </dt>
                            <input v-model="userEmail" disabled class="py-2 px-3 col-span-3 font-light outline-none focus:ring-primary-base focus:border-primary-base flex-1 block w-full rounded text-sm border border-gray-200">
                          </div>
                        </div>

                        <div class="px-6 py-2 grid grid-cols-4">
                          
                        </div>
                        <div class="px-6 py-2 grid grid-cols-4">
                          
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inline-block mx-4">
            <ul class="">
              <li v-for="(account, id) in accountData" :key="id"  class="">
                <AccountItemEdit v-show="account.type == this.activeAccountFilter || this.activeAccountFilter == ''" :account="account" v-on:refreshAccountData="$emit('refreshAccountData')"/>
              </li>
            </ul>
          </div>
          <div class="w-1/6 inline-block ">
            <div class="select-none bg-gray-50">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateAccountModal v-show="createAccountModalOpen" v-on:createNewAccount="createNewAccount" v-on:closeModal="openCreateAccountModal"/>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data: () => ({
    title: "Profile",
    userFirstName: '',
    userLastName: '',
    userEmail: ''
  }),
  components: {
  },
  methods: {
  },
  computed: {
    
  }
}
</script>