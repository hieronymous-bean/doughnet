<template>
  <div>
    <div>
    <img class="mx-auto h-12 w-auto" src="../../global/img/doughnet-logo.png" alt="Workflow">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      {{ stateUserEmail }}
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <router-link to="/auth/register" class="font-medium text-primary-base hover:text-primary-dark">
        Create an account
      </router-link>
    </p>
    </div>
    <form class="mt-8 space-y-6" action="#" v-on:submit.prevent="userLogin" ref="loginForm">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" v-model="userEmail" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-primary-dark rounded-t-md focus:outline-none focus:ring-primary-base focus:border-primary-base focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" v-model="userPassword" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-primary-dark rounded-b-md focus:outline-none focus:ring-primary-base focus:border-primary-base focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-primary-dark focus:ring-primary-dark border-primary-dark rounded">
          <label for="remember_me" class="ml-2 block text-sm text-primary-dark">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-primary-base hover:text-primary-dark">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-base hover:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-primary-light group-hover:text-primary-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>


<script>


export default {
  data: function() {
        return {
      title: 'Login',
      stateUserEmail: this.$store.state.userEmail
    }
  },
  components: {
  },
  methods: {
    userLogin: function(e) {
      e.preventDefault;
      let data = {
        email: this.userEmail,
        password: this.userPassword
      }
      this.$store.dispatch('logIn',data)
    }
  }
} 
</script>