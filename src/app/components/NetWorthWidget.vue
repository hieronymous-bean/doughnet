<template>
  <div class="">
    <div class="bg-white rounded-3xl shadow-sm px-6 py-5">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block font-sans text-3xl font-bold text-primary-base">Net Worth</span>
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
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-base bg-primary-two">
                  Assets
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-primary-one">
                  {{ calculateNetWorth.assetRatio }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-two">
              <div style="width:1.2%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-one"></div>
            </div>
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-tertiary-red bg-tertiary-redLight">
                  Liabilities
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-tertiary-red">
                {{ calculateNetWorth.debtRatio }}%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-tertiary-redLight">
              <div style="width:98%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tertiary-red"></div>
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
      positiveClass: 'text-primary-one',
      negativeClass: 'text-tertiary-red'
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