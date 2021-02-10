<template>
    <div class="grid grid-cols-2 rounded border border-gray-100 bg-gray-50 p-2 cursor-pointer" @click="expandAccountType" :isThisTypeExpanded="isTypeExpanded">
      <div class="relative">
        <button class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" class="absolute top-2.5" viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
          </svg>
        </button>
        <span class="mx-4 capitalize">{{ typeOfAccount }}</span>
      </div>
      <div class="relative">
        <span class="float-right">Type Total</span>
      </div>
      <div v-show="isTypeExpanded" class="grid grid-cols-1 w-1/2">
        <div v-for="account in accountData" :key="account.id">
          <div v-show="account.type == typeOfAccount" class="p-2 font-light text-lg text-primary-dark underline">
            <router-link
              class="flex items-center"
              to="/transactions"
            >
            {{ account.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
import { accountDemoData } from "../../../static/account-data";
export default {
    data: function() {
        return {
          isTypeExpanded: false,
          accountData: accountDemoData.accounts
        }
    },
    props: [
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