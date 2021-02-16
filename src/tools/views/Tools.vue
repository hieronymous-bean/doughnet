<template>
  <div class="flex flex-col">
    <div class="my-1">
      <div class="inline-block min-w-full">
        <div class="mt-1 pb-4 px-6">
          <h1 class="inline-block text-4xl font-normal">Tools</h1>
        </div>
        <div>
          <div class="w-1/6 align-top pr-5 h-full inline-block">
            <div class="inline-block min-w-full border">
              <div class="bg-white">
                <div class="rounded my-1 p-2 font-light text-sm">
                  <div class="px-2 py-1 w-full">
                    <dt class="py-2 block text-md font-normal text-gray-600">
                      Start Date
                    </dt>
                    <input v-model="snowballStartDate" placeholder="today" class="py-1 px-3 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                  </div>
                  <div class="px-2 py-1 w-full">
                    <dt class="py-2 block text-md font-normal text-gray-600">
                      Debt Free Date
                    </dt>
                    <input v-model="snowballStartDate" disabled class="py-1 px-3 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                  </div>
                  <div class="px-2 py-1 w-full">
                    <dt class="py-2 block text-md font-normal text-gray-600">
                      Total Debt
                    </dt>
                    <input v-model="snowballStartDate" disabled class="py-1 px-3 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                  </div>
                  <div class="px-2 py-1 w-full">
                    <dt class="py-2 block text-md font-normal text-gray-600">
                      Total Payments
                    </dt>
                    <input v-model="snowballStartDate" disabled class="py-1 px-3 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                  </div>
                  <div class="px-2 py-1 w-full">
                    <dt class="py-2 block text-md font-normal text-gray-600">
                      Interest Paid
                    </dt>
                    <input v-model="snowballStartDate" disabled class="py-1 px-3 col-span-3 font-light outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded text-sm border border-gray-200">
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div class="w-5/6 align-top h-full inline-block">
            <div class="inline-block min-w-full">
              <div class="border overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-primary-base text-white">
                    <tr>
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
  name: 'Tools',
    data: () => ({
        title: "Tools",
        snowballStartDate: ''
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