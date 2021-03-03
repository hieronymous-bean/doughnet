<template>
  <div class="fixed z-50 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-70"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-sm text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-theme-primary-base px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-theme-primary-base sm:mx-0 sm:h-10 sm:w-10 ">
              <svg class="fill-current text-white-base" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="text-white" d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z"/></svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-2xl leading-6 font-regular text-white-base" id="modal-headline">
                Manually Add Account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-white-base">
                  Enter the information below to add a new account.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <Form @submit="createNewAccount">
            <div class="bg-gray-50 relative px-6 pt-3 pb-1">
              <Field name="newAccountName" :rules="accountNameRules" v-model="newAccountName" placeholder="Account Name" class="p-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
              <ErrorMessage name="newAccountName" class="absolute top-3 right-8 font-light text-xs text-red-900" />
            </div>
            <div class="bg-gray-50 relative px-6 py-1">
              <Field name="newAccountDescription" :rules="accountNameRules" v-model="newAccountDescription" placeholder="Account Description" class="p-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
              <ErrorMessage name="newAccountDescription" class="absolute top-3 right-8 font-light text-xs text-red-900" />
            </div>
            <div class="bg-gray-50 relative px-6 py-1">
              <select name="newAccountType" v-model="newAccountType" placeholder="Account Type" class="p-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200 capitalize">
                <option disabled selected value="">Please select one</option>
                <option v-for="(type, index) in AllAccountTypes" :key="index">{{ type }}</option>
              </select>
              <ErrorMessage name="newAccountType" class="absolute top-3 right-8 font-light text-xs text-red-900" />
            </div>
            <div class="bg-gray-50 relative px-6 py-1">
              <Field name="newAccountBalance" :rules="accountDollarRules" v-model="newAccountBalance" placeholder="Current Balance" class="p-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
              <ErrorMessage name="newAccountBalance" class="absolute top-3 right-8 font-light text-xs text-red-900" />
            </div>
            <div class="bg-gray-50 relative px-6 py-1">
              <Field name="newAccountPayment" :rules="accountDollarRules" v-model="newAccountPayment" placeholder="Monthly Payment" class="p-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
              <ErrorMessage name="newAccountPayment" class="absolute top-3 right-8 font-light text-xs text-red-900" />
            </div>
            
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" class="w-full inline-flex justify-center rounded-md shadow-md px-4 py-2 bg-theme-primary-five text-white-base font-medium text-white hover:bg-primary-base focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm">
              Create
              </button>
              <button @click.prevent="closeModalButtonClick" type="button" class="mt-3 w-full inline-flex justify-center rounded-md shadow-md px-4 py-2 bg-white-base text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </Form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import accountTypes from '../../global/data/accountTypes.json'
import { createAccount } from '../utilities/accountUtilities.js'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  data: function() {
    return {
      newAccountName: '',
      newAccountDescription: '',
      newAccountType: '',
      newAccountBalance: '',
      newAccountPayment: '',
      newCreatedDate: '',
      newLastModifiedDate: '',
      AllAccountTypes: (accountTypes.assets).concat(accountTypes.debts),
      accountNameRules: yup.string().required('This field is required.'),
      accountDollarRules: yup.number().required('This field is required.').typeError("Value needs to be a number.")
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
  },
  props: [
  ],
  methods: {
    createNewAccount: function() {
      const accountPayload = {
        user: this.$store.getters.getCurrentUserId,
        name: this.newAccountName,
        description: this.newAccountDescription,
        type: this.newAccountType,
        currentBalance: this.newAccountBalance,
        minimumPayment: this.newAccountPayment,
        createdDate: Date.now(),
        lastModifiedDate: Date.now(),
      }
      createAccount(accountPayload).then(response => {
        this.createAccountModalOpen = false;
        this.$emit('accountCreated');
        return response;
      });
    },
    closeModalButtonClick: function() {
      this.$emit('closeModal');
    }
  },
}
</script>