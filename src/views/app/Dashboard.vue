<template>
  <div class="">
    
    
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