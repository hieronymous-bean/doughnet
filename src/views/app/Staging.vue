<template>
  <div>
    <!-- Header -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <nav class="bg-white">
      <div class="mx-auto px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <img src="../../assets/doughnet-logo.png" class="w-40">
            <div class="hidden md:block">
              <div class="ml-20 flex items-baseline space-x-4">
                <div class="relative mx-4 lg:mx-0 text-gray-400">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    class="bg-gray-100 form-input w-32 sm:w-64 rounded-md pl-10 pr-4 py-3 focus:border-gray-600"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">

              <button type="button" class="py-3 px-8 mx-4 flex justify-center items-center bg-gray-50 hover:bg-gray-100 focus:ring-gray-100 focus:ring-offset-gray-100 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                 + Add Accounts
              </button>

              <button class="bg-gray-50 p-1 mx-4 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <div class="ml-3 relative">
                <button @click="toggleUserMenu" type="button" class="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-50 bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                    <svg width="20" fill="currentColor" height="20" class="text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                        </path>
                    </svg>
                </button>

                    <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>


    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="flex rounded border-r">
        <div class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"> 
        </div>
        <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-50 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">

          <nav class="mt-10 font-semibold text-lg text-gray-500">
            <router-link
              class="flex items-center duration-200 py-2 px-6  hover:bg-gray-700"
              :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
              to="/dashboard"
            >
              <span class="mx-4">Dashboard</span>
            </router-link>
            <router-link
              class="flex items-center duration-200 mt-4 py-2 px-6 hover:bg-gray-700"
              :class="[$route.name === 'Accounts' ? activeClass : inactiveClass]"
              to="/accounts"
            >
              <span class="mx-4">Accounts</span>
            </router-link>
            <router-link
              class="flex items-center duration-200 mt-4 py-2 px-6 hover:bg-gray-700"
              :class="[$route.name === 'Transactions' ? activeClass : inactiveClass]"
              to="/transactions"
            >
              <span class="mx-4">Transactions</span>
            </router-link>
            <router-link
              class="flex items-center duration-200 mt-4 py-2 px-6 hover:bg-gray-700"
              :class="[$route.name === 'Tools' ? activeClass : inactiveClass]"
              to="/tools"
            >
              <span class="mx-4">Tools</span>
            </router-link>
          </nav>
        </div>
      </div>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
        <div class="shadow-lg rounded-xl bg-white w-full md:w-64 p-6 bg-white dark:bg-gray-800 relative overflow-hidden m-8">
    <p class="text-gray-600 text-xl font-bold">
        Account Stats
    </p>
    <div class="flex items-center my-4 text-gray-500 rounded justify-between">
        <span class="rounded-lg p-2 bg-white">
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                </path>
            </svg>
        </span>
        <div class="flex flex-col w-full ml-2 items-start justify-evenly">
            <p class="text-gray-500 text-lg font-bold">
                Test
            </p>
            <p class="text-gray-400 text-sm">
                Open Accounts
            </p>
        </div>
    </div>
    <div class="mt-4">
      <router-link to="/accounts"><button type="button" class="py-2 px-4  bg-gray-500 hover:bg-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            View Accounts
        </button></router-link>
        
    </div>
    
</div>
      </main>
      
    </div>
  </div>
</template>

<script>

// import PageHeader from '../../components/app/PageHeader.vue'

export default {
    data: () => ({
        title: 'Dashboard'
    }),
    components: {
      // PageHeader
    }
}
</script>