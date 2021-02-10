<template>
  <div>
    <Topbar/>
    <div class="flex h-screen bg-primary-lightest">
      <Sidebar/>
      <main class="w-full">
        <div class="mx-auto sm:px-2 lg:px-2">
          <div class="">
            <div class="mx-auto py-3">
              <div class="h-full w-full rounded">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

import Topbar from './Topbar.vue'
import Sidebar from './Sidebar.vue'

export default {
    data: () => ({
        title: 'Dashboard'
    }),
    components: {
      Topbar,
      Sidebar
    }
}
</script>