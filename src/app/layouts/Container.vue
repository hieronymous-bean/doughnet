<template>
  <div class="bg-gray-light select-none overflow-hidden">
    <div class="flex">
      <Sidebar/>
      <div class="w-full h-screen font-poppins">
        <Topbar v-on:refreshAccountData="refreshAccountData"/>
        <main class="w-full overflow-y-auto max-h-screen">
          <div class="mx-auto">
            <div>
              <div class="mx-auto p-3">
                <div class="rounded">
                  <router-view :accountData="accountDataResponse" :accountTypes="getAccountTypes" v-on:refreshAccountData="refreshAccountData"></router-view>
                </div>
              </div>
            </div>  
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>

import Topbar from './Topbar.vue'
import Sidebar from './Sidebar.vue'

import { getAccounts } from '../../accounts/utilities/accountUtilities.js'

export default {
  data: () => ({
      title: 'Dashboard',
      accountDataResponse: [],
  }),
  components: {
    Topbar,
    Sidebar
  },
  methods: {
    refreshAccountData: function() {
      getAccounts(this.$store.getters.getCurrentUserId).then(response => {
        this.accountDataResponse = response;
      });
    }
  },
  computed: {
    getAccountTypes: function () {
      return [...new Set(this.accountDataResponse.map(({ type }) => type))]
    }
  },
  beforeCreate: function() {
    getAccounts(this.$store.getters.getCurrentUserId).then(response => {
      this.accountDataResponse = response;
    });
  }
}
</script>