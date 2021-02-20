<template>
  <div class="">
    <div class="bg-secondary-four rounded-sm px-6 py-5">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block font-sans text-2xl font-bold text-black">Net Worth</span>
            <span class="block text-md font-light text-gray-800">Your Assets Minus Debts</span>
        </h2>
        
      </div>

      <div class="mt-3">
        <div class="rounded-sm overflow-hidden">
          <div class="text-lg font-bold">
            ${{ calculateNetWorth }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import accountTypes from '../../global/data/accountTypes.json'
export default {
  data: function() {
    return {
    }
  },
  components: {
  },
  props: [
    'accounts'
  ],
  methods: {
  },
  computed: {
    calculateNetWorth: function() {
      let totalValue = 0;
      console.log(accountTypes.assets)
      for (var i = this.accounts.length - 1; i >= 0; i--) {
        if ((accountTypes.assets).indexOf(this.accounts[i].type) !== -1) {
          totalValue = totalValue + parseInt(this.accounts[i].currentBalance)
        }
        else if ((accountTypes.debts).indexOf(this.accounts[i].type) !== -1) {
          totalValue = totalValue - parseInt(this.accounts[i].currentBalance)
        }
      }
      return totalValue;
    }
  }
} 
</script>