<template>
    <div class="grid grid-cols-2 rounded border border-gray-100 bg-gray-50 p-2 cursor-pointer font-light text-sm" @click="expandAccountType" :isThisTypeExpanded="isTypeExpanded">
      <div class="relative">
        <button class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" class="absolute top-1.5" viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
          </svg>
        </button>
        <span class="mx-4 capitalize">{{ typeOfAccount }}</span>
      </div>
      <div class="">
        <span class="float-right">Type Total</span>
      </div>
      <div v-show="isTypeExpanded" class="grid grid-cols-1 w-1/2">
        <div v-for="account in accountData" :key="account.id">
          <div v-show="account.type == typeOfAccount" class="p-2 text-primary-dark underline">
            <router-link
              class="flex items-center"
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
    }
}
</script>