<template>
  <div class="bg-white-tint select-none flex font-nunito">
    <main class="w-full">
      <div class="mx-auto">
        <Navbar/>
        <router-view :loadedAccountData="loadAccountData" :loadedAccountTypes="loadAccountTypes"></router-view> 
      </div>
    </main>
  </div>
</template>

<script>
import { getAccounts } from '../../accounts/utilities/accountUtilities.js'
import Navbar from '../../app/layouts/Navbar.vue'
export default {
  data: () => ({
    loadAccountData: []
  }),
  components: {
    Navbar
  },
  computed: {
    loadAccountTypes: function () {
      return [...new Set(this.loadAccountData.map(({ type }) => type))]
    }
  },
  beforeCreate: function() {
    getAccounts(this.$store.getters.getCurrentUserId).then(response => {
      this.loadAccountData = response;
    });
  }
}
</script>