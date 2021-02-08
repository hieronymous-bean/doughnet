<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="px-6 py-5 bg-white shadow-md">
      <h2 class="">
          <span class="block font-sans text-2xl font-semibold text-gray-900">Accounts</span>
          <span class="block font-light text-gray-800">All of your currently active accounts.</span>
      </h2>
    </div>
    
  </div>
</template>
<script>

import { accountDemoData } from "../../static/account-data";

export default {
  name: 'Dashboard',
    data: () => ({
      accountData: accountDemoData,
        title: "Dashboard"
    }),
    methods: {
      isSidebarOpen: false,
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen
      },
      isSettingsPanelOpen: false,
      toggleSettingsPanel() {
        this.isSettingsPanelOpen = !this.isSettingsPanelOpen
      },
    }
}
</script>