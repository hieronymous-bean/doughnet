<template>
  <div v-click-outside="closeNotificationsDropdown">
    <button @click.prevent="toggleNotificationsDropdown" class="bg-gray-50 p-1 mx-4 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none">
      <span class="sr-only">View notifications</span>
      <svg class="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
    <div v-show="notificationsDropdown" class="fixed origin-top-right right-0 mt-2 p-3 w-48 rounded-md shadow-lg py-1 bg-white">
      <p class="block outline-none focus:outline-none px-4 py-2 text-sm text-gray-700">You have no notifications.</p>
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