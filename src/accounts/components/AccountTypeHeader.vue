<template>
    <div class="grid grid-cols-2 rounded-md border border-secondary-four bg-white py-3 px-2 cursor-pointer font-normal" @click="expandAccountType" :isThisTypeExpanded="isTypeExpanded">
      <div class="relative">
        <button class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" :class="[{ transform: this.isTypeExpanded },{ 'rotate-90': this.isTypeExpanded}]" width="8" height="8" class="absolute top-1/3 fill-current text-black" viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
          </svg>
        </button>
        <span class="mx-4 text-md capitalize">{{ typeOfAccount }}</span>
      </div>
      <div class="">
        <span class="float-right">${{ accountTypeTotal }}</span>
      </div>
      <div v-show="isTypeExpanded" class="grid grid-cols-1 w-1/2 mt-2">
        <div v-for="account in accountData" :key="account.id" class="hover:bg-gray-50 rounded">
          <div v-show="account.type == typeOfAccount" class="p-2 font-semibold text-black">
            <router-link
              class="flex items-center outline-none focus:outline-none"
              :to="{ path: 'accounts', query: { account: account.id }}"
            >
            {{ account.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
export default {
  data: function() {
    return {
      isTypeExpanded: false
    } 
  },
  props: [
    'accountData',
    'typeOfAccount',
    'isThisTypeExpanded'
  ],
  methods: {
    expandAccountType: function() {
      this.isTypeExpanded = !this.isTypeExpanded
    }
  },
  computed: {
    accountTypeTotal: function() {
      let accountTypeTotal = [];

      Object.entries(this.accountData).forEach(([key, val]) => {
        if (val.type == this.typeOfAccount) {
          accountTypeTotal.push(parseInt(val.currentBalance)) // the value of the current key.
          return key;
        }
      });
      return accountTypeTotal.reduce((a, b) => a + b, 0)
    }
  }
}
</script>