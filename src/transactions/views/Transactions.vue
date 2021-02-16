<template>
  <div class="flex flex-col">
    <div class="my-1">
      <div class="inline-block min-w-full">
        <div class="mt-1 pb-4 pl-5">
          <h1 class="inline-block text-4xl font-normal">Recorded Transactions</h1>
          <button @click.prevent="openCreateAccountModal" type="button" class="w-full float-right inline-block rounded-md border border-transparent shadow-sm px-4 py-1 bg-secondary-three font-regular text-black hover:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base sm:w-auto sm:text-sm">
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
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <label class="block items-center py-1">
                            <input type="checkbox" class="rounded-sm text-xs font-light text-primary-base outline-none focus:outline-none focus:ring-0" />
                          </label>
                        </div>
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">MM/DD/YYYY</div>
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap">
                        Description of Transaction here
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        Transaction Category
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        Account
                      </td>
                      <td class="font-light px-6 py-4 whitespace-nowrap text-sm">
                        $12
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

export default {
  name: 'Transactions',
    data: () => ({
        title: "Transactions"
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