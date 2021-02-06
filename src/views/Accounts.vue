<template>
	<div class="flex flex-col">
	  <div class="my-1 overflow-hidden sm:-mx-6 lg:-mx-8">
	    <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
	      <div class="overflow-hidden sm:rounded-sm">
	        <ul class="flex flex-col">
		        <li v-for="account in accountData.accounts" class="border-gray-400 flex flex-row mb-2">
		            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-6">
		                <div class="flex-1 pl-1 md:mr-16">
		                    <div class="font-bold dark:text-white">
		                        {{ account.name }}
		                    </div>

		                </div>
		                <div class="flex-1 pl-1 md:mr-16">

							<span class="px-4 py-1 text-xs rounded-full text-indigo-500 border border-indigo-500 undefined ">
							    {{ account.type }}
							</span>

		                </div>
		                <div class="flex-1 pl-1 md:mr-16">
		                    <div class="font-light dark:text-white">
		                        {{ account.currentBalance }}
		                    </div>

		                </div>
		                <div class="flex pl-1 md:mr-16">
		                    <div class="font-light dark:text-white">
		                        {{ account.interestRate }}
		                    </div>

		                </div>
		                <button class="w-24 text-right flex justify-end">
		                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
		                        </path>
		                    </svg>
		                </button>
		            </div>
		        </li>
    		</ul>
	      </div>
	    </div>
	  </div>
	</div>


</template>


<script>

import PageHeader from '../components/global/PageHeader.vue'

import { accountDemoData } from "../static/account-data";

export default {
	name: 'Accounts',
    data: () => ({
        accountData: accountDemoData,
        title: "Accounts"
    }),
    components: {
      PageHeader
    }
}
</script>