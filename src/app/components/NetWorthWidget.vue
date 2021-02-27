<template>
  <div class="">
    <div class="bg-white-base rounded-sm px-6 py-5 shadow-md">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block text-3xl font-semibold">Net Worth</span>
            <span class="block text-md font-light text-gray-800">Assets Minus Debts</span>
        </h2>
        
      </div>

      <div class="mt-3">
        <div class="rounded-sm  overflow-hidden">
          <div :class="calculateNetWorth.totalValue < 0 ? negativeClass : positiveClass" class="text-2xl font-light">
            ${{ calculateNetWorth.totalValue }}
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-supporting-green bg-supporting-greenLight">
                  Assets
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-supporting-green">
                  {{ calculateNetWorth.assetRatio }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-supporting-greenLight">
              <div style="width:1.2%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-supporting-green"></div>
            </div>
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-supporting-red bg-supporting-redLight">
                  Liabilities
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-supporting-red">
                {{ calculateNetWorth.debtRatio }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-supporting-redLight">
              <div style="width:98%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-supporting-red"></div>
            </div>
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
      positiveClass: 'text-supporting-green',
      negativeClass: 'text-supporting-red'
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

      let netValues = {
        grossValue: 0,
        totalValue: 0,
        assetTotal: 0,
        debtTotal: 0,
        assetRatio: 0,
        debtRatio: 0
      }

      this.accounts.forEach(account => {
        if (accountTypes.assets.indexOf(account.type.toLowerCase()) !== -1) {
          netValues.totalValue = netValues.totalValue + parseInt(account.currentBalance)
          netValues.grossValue = netValues.grossValue + parseInt(account.currentBalance)
          netValues.assetTotal = netValues.assetTotal + parseInt(account.currentBalance)
        }

        if (accountTypes.debts.indexOf(account.type.toLowerCase()) !== -1) {
          netValues.totalValue = netValues.totalValue - parseInt(account.currentBalance)
          netValues.grossValue = netValues.grossValue + parseInt(account.currentBalance)
          netValues.debtTotal = netValues.debtTotal + parseInt(account.currentBalance)
        }
      })

      netValues.assetRatio = (netValues.assetTotal / netValues.grossValue) * 100
      netValues.debtRatio = (netValues.debtTotal / netValues.grossValue) * 100

      return netValues

    }

  }

} 
</script>