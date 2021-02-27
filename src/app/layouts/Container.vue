<template>
  <div class="bg-white-tint select-none flex font-nunito">
    <div class="w-full">
      <Navbar/>
      <div class="w-full py-3">
        <main class="w-full">
          <div class="mx-auto">
            <div>
              <div class="mx-auto px-4 py-1">
                <div>
                  <router-view :loadedAccountData="loadAccountData" :loadedAccountTypes="loadAccountTypes"></router-view>
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
import { getAccounts } from '../../accounts/utilities/accountUtilities.js'
import Navbar from './Navbar.vue'

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