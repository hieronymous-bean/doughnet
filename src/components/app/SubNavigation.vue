<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex items-center h-14 font-bold">
        <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              <router-link to="/dashboard" class="px-3 py-2 rounded-md text-lg">Dashboard</router-link>
              <router-link to="/accounts" class="px-3 py-2 rounded-md text-lg font-bold">Accounts</router-link>
              <router-link to="/transactions" class="px-3 py-2 rounded-lg text-lg font-bold">Transactions</router-link>
              <router-link to="/tools" class="px-3 py-2 rounded-md text-lg font-bold">Tools</router-link>
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