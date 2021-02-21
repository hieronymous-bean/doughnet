<template>
  <div class="">
    <div class="bg-secondary-four rounded-sm px-6 py-5">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block font-sans text-2xl font-bold text-black">Net Worth</span>
            <span class="block text-md font-light text-gray-800">Assets Minus Debts</span>
        </h2>
        
      </div>

      <div class="mt-3 p-2 bg-white shadow-sm">
        <div class="rounded-sm overflow-hidden">
          <div :class="calculateNetWorth < 0 ? negativeClass : positiveClass" class="text-lg font-bold">
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
      positiveClass: 'text-green-800',
      negativeClass: 'text-red-800'
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
      this.accounts.forEach(account => {
        if (accountTypes.assets.indexOf(account.type.toLowerCase()) !== -1) {
          totalValue = totalValue + parseInt(account.currentBalance)
        }

        if (accountTypes.debts.indexOf(account.type.toLowerCase()) !== -1) {
          totalValue = totalValue - parseInt(account.currentBalance)
        }
      }); 
      return totalValue;
    }
  }
} 
</script>