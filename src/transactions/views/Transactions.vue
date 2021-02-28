<template>
  <div class="flex flex-col">
    <div class="w-full mr-4">
      <div class="">
        <div class="flex justify-between px-4 py-3 bg-theme-primary-three border border-indigo-200 rounded-t-lg">
          <div class="flex items-center">
            <img class="w-6 h-6 mr-2 rounded-md" src="https://avatars3.githubusercontent.com/in/2141?s=60&v=4" alt="">
            <p class="text-sm font-semibold">Tranasctions</p>
            <span class="ml-2 text-sm text-gray-600">Last Refresh: 3 days ago</span>
          </div>
        </div>
        <div class="hidden bg-white-base text-center border-b border-l border-r rounded-b-lg md:block">
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">.github</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Drop fs-extra version to..</p>
              <p class="w-1/4 text-right">2 months ago</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">dist</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Add empty .npmignore so dist files are distributed with releases</p>
              <p class="w-1/4 ml-2 text-right">3 years ago</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">scripts</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Don't generate color opacity code in color plugins if not necessary</p>
              <p class="w-1/4 ml-2 text-right">3 months ago</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">src</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Throw if contains a class</p>
              <p class="w-1/4 ml-2 text-right">last months</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">LICENSE</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Avoid updating license every year</p>
              <p class="w-1/4 ml-2 text-right">3 years ago</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">README.md</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Replace logo in README</p>
              <p class="w-1/4 ml-2 text-right">2 months ago</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">package.json</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">1.4.6</p>
              <p class="w-1/4 ml-2 text-right">last month</p>
          </div>
          <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
            <div class="flex w-1/4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">tailwind.css</p>
            </div>
              <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Undo accidental changes to CDN build process</p>
              <p class="w-1/4 ml-2 text-right">6 months ago</p>
          </div>
        </div>
        <div class="py-2 text-center border-b border-l border-r rounded-b-lg md:hidden">
          <p class="text-blue-600 cursor-pointer hover:underline">View code</p>
        </div>
      </div>
      
    </div>
    <div class="my-1">
      <div class="inline-block min-w-full">
        <div class="mt-1 pb-4 pl-5">
          <h1 class="block text-4xl font-extralight text-black-base">Recorded Transactions</h1>
          <button @click.prevent="openCreateAccountModal" type="button" class="w-full float-right inline-block rounded-md border border-transparent px-5 py-1 bg-secondary-two font-medium text-black hover:bg-secondary-two focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-md">
          + Import Transactions
          </button>
        </div>
        <div>
          <div class="w-1/6 align-top pr-5 h-full inline-block">
            <div class="inline-block min-w-full shadow-sm">
              <div class="p-4 bg-white">
                <div class="grid grid-cols-2 rounded border border-gray-100 bg-gray-50 my-1 p-2 cursor-pointer font-light text-sm">
                  <div class="relative">
                    <span class="capitalize">Category</span>
                  </div>
                  <div class="">
                    <span class="float-right">
                      <svg class="fill-current text-primary-lighter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 22v-2h6v2h-6zm7.311-7.662l9.689-9.804-4.536-4.534-9.69 9.802 4.537 4.536zm-7.311-6.338h1.743l1.978-2h-3.721v2zm11 8h2v-4.573l-2 2.023v2.55zm-9.576-4.718l-1.424 5.718 5.826-1.318-4.402-4.4zm-6.424-1.282v-2h3v-2h-5v4h2zm16 8v2h-3v2h5v-4h-2zm-13 2h-3v-2h-2v4h5v-2zm-5-4h2v-4h-2v4z"/></svg>
                    </span>
                  </div>
                </div> 
                <div class="grid grid-cols-2 rounded border border-gray-100 bg-gray-50 my-1 p-2 cursor-pointer font-light text-sm">
                  <div class="relative">
                    <span class="capitalize">Tags</span>
                  </div>
                  <div class="">
                    <span class="float-right">
                      <svg class="fill-current text-primary-lighter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 22v-2h6v2h-6zm7.311-7.662l9.689-9.804-4.536-4.534-9.69 9.802 4.537 4.536zm-7.311-6.338h1.743l1.978-2h-3.721v2zm11 8h2v-4.573l-2 2.023v2.55zm-9.576-4.718l-1.424 5.718 5.826-1.318-4.402-4.4zm-6.424-1.282v-2h3v-2h-5v4h2zm16 8v2h-3v2h5v-4h-2zm-13 2h-3v-2h-2v4h5v-2zm-5-4h2v-4h-2v4z"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-5/6 align-top h-full inline-block">
            <div class="inline-block min-w-full">
              <div class="shadow-sm overflow-hidden border-b border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-primary-base text-white">
                    <tr>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Select</span>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                       Transaction Date
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Associated Account
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Ammount
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(transaction, index) in transactionData" :key="index">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <label class="block items-center py-1">
                            <input type="checkbox" class="rounded-sm text-xs font-light text-primary-base outline-none focus:outline-none focus:ring-0" />
                          </label>
                        </div>
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{transaction.Date}}</div>
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap">
                       {{transaction.Description}}
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        {{transaction.Category}}
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        Account
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        {{transaction.Amount}}
                      </td>
                    </tr>

                    <!-- More items... -->
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demoTransactions from '../../global/data/demoTransactions.json'
export default {
  name: 'Transactions',
    data: () => ({
        title: "Transactions",
        transactionData: demoTransactions
    }),
    components: {
    },
    props: [
      'accountData'
    ],
    methods: {

    },
    computed: {
    }
}
</script>