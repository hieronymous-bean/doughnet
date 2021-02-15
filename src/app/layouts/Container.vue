<template>
  <div>
    <Topbar/>
    <div class="flex h-screen bg-primary-lightest font-poppins">
      <Sidebar/>
      <main class="w-full">
        <div class="mx-auto sm:px-2 lg:px-2">
          <div class="">
            <div class="mx-auto py-3">
              <div class="rounded">
                <router-view :accountData="accountDataResponse" :accountTypes="getAccountTypes" v-on:refreshAccountData="refreshAccountData"></router-view>
              </div>
            </div>
          </div>
        </div>
      </main>
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
      accountDataResponse: []
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