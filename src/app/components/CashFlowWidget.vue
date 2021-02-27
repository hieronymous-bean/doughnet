<template>
  <div class="">
    <div class="bg-white-base rounded-sm px-6 py-5 shadow-md">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block text-3xl font-semibold">Cash Flow</span>
            <span class="block text-md font-light text-gray-800">Monthly Income Minus Expenses</span>
        </h2>
        
      </div>

      <div class="mt-3">
        <div class="rounded-sm  overflow-hidden">
          <div class="text-2xl font-light">
            $
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-supporting-green bg-supporting-greenLight">
                  Income
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-supporting-green">
                  
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
                  Expenses
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-supporting-red">
                
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
export default {
  data: function() {
    return {
    }
  },
  components: {
  },
  props: [
  ],
  methods: {
  },
} 
</script>