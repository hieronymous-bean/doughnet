<template>
  <div v-click-outside="closeNotificationsDropdown">
    <button @click.prevent="toggleNotificationsDropdown" class="p-1 text-white-tint border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
      <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"> 
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
    <div v-show="notificationsDropdown" class="fixed origin-top-right right-0 mt-2 px-3 py-4 w-48 rounded-sm shadow-md py-1 bg-white-base">
      <p class="block outline-none focus:outline-none text-sm text-gray-700">You have no notifications.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      notificationsDropdown: false
    }
  },
  components: {
  },
  props: [
  ],
  methods: {
    toggleNotificationsDropdown: function() {
      this.notificationsDropdown = !this.notificationsDropdown
    },
    closeNotificationsDropdown: function() {
      this.notificationsDropdown = false
    }
  },
}
</script>