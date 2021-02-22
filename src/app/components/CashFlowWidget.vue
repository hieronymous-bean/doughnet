<template>
  <div class="">
    <div class="bg-white rounded-3xl shadow-sm px-6 py-5">
      <div class="flex">
        <h2 class="flex-1">
            <span class="block font-sans text-2xl font-bold text-black">Cash Flow</span>
            <span class="block text-md font-light text-gray-800">Monthly Income Minus Expenses</span>
        </h2>
        
      </div>

      <div class="mt-3 p-2">
        <div class="rounded-sm overflow-hidden">
          <div class="text-2xl font-light">
            $
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Income
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-green-600">
                  0%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            </div>
          </div>
          <div class="relative py-2">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                  Expenses
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-red-600">
                  0%
                </span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
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