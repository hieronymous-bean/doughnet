<template>
  <div class="h-auto flex rounded border-r border-gray-lightest">
    <div class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"> 
    </div>
    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-primary-lightest overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">

      <nav class="mt-3 font-semibold text-lg text-gray-dark">
        <router-link
          class="flex items-center mt-4 p-2 px-6 m-3 rounded-sm"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link
          class="flex items-center mt-2 p-2 px-6 m-3 rounded-sm"
          :class="[$route.name === 'Accounts' ? activeClass : inactiveClass]"
          to="/accounts"
        >
          <span class="mx-4">Accounts</span>
        </router-link>
        <router-link
          class="flex items-center mt-2 p-2 px-6 m-3 rounded-sm"
          :class="[$route.name === 'Transactions' ? activeClass : inactiveClass]"
          to="/transactions"
        >
          <span class="mx-4">Transactions</span>
        </router-link>
        <router-link
          class="flex items-center mt-2 p-2 px-6 m-3 rounded-sm"
          :class="[$route.name === 'Tools' ? activeClass : inactiveClass]"
          to="/tools"
        >
          <span class="mx-4">Tools</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
    data: function() {
      return {
        activeClass: 'text-white bg-primary-base font-bold',
        isOpen: false
      }
    },
    components: {
      // SubNavigation
    },
    props: [
    ],
    methods: {

    }
}
</script>