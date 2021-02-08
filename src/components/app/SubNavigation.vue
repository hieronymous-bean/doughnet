<template>
  <div class="bg-gray-100 shadow shadow-sm">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex items-center h-12 font-medium">
        <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              <router-link to="/dashboard" class="px-3 py-2 rounded-md text-lg hover:bg-gray-200 focus:bg-gray-300">Dashboard</router-link>
              <router-link to="/accounts" class="px-3 py-2 rounded-md text-lg hover:bg-gray-200 focus:bg-gray-300">Accounts</router-link>
              <router-link to="/transactions" class="px-3 py-2 rounded-lg text-lg hover:bg-gray-200 focus:bg-gray-300">Transactions</router-link>
              <router-link to="/tools" class="px-3 py-2 rounded-md text-lg hover:bg-gray-200 focus:bg-gray-300">Tools</router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    
  })
}
</script>