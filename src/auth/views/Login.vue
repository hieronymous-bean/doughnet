<template>
  <section class="bg-primary-base h-screen">
        <div class="mx-auto flex justify-center lg:items-center h-full">
            <form id="login" class="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0" v-on:submit.prevent="userLogin">
                <div class="pt-16 px-2 flex flex-col items-center justify-center">
                    <h3 class="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">Login To Your Doughnet Account</h3>
                </div>
                <div class="mt-12 w-full px-2 sm:px-6">
                    <div class="flex flex-col mt-5">
                        <label for="email" class="text-lg font-semibold leading-tight">Email</label>
                        <input required id="email" name="email" v-model="userEmail" class="h-10 px-2 w-full text-white bg-primary-dark rounded mt-2 focus:outline-none shadow" type="email" />
                    </div>
                    <div class="flex flex-col mt-5">
                        <label for="password" class="text-lg font-semibold fleading-tight">Password</label>
                        <input required id="password" name="password" v-model="userPassword" class="h-10 px-2 w-full text-white bg-primary-dark rounded mt-2 focus:outline-none shadow" type="password" />
                    </div>
                </div>
                <div class="pt-6 w-full flex justify-between px-2 sm:px-6">
                    <div class="flex items-center">
                        <input id="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                        <label for="rememberme" class="text-xs">Remember Me</label>
                    </div>
                    <a class="text-xs" href="javascript: void(0)">Forgot Password?</a>
                </div>
                <div class="px-2 sm:px-6">
                    <button class="focus:outline-none w-full bg-white transition duration-150 ease-in-out hover:bg-gray-100 rounded text-primary-dark px-8 py-3 text-sm mt-6">Login</button>
                    <p class="mt-16 text-xs text-center">Don’t Have An Account? <a class="underline" href="javascript: void(0)">Sign Up</a></p>
                </div>
            </form>
        </div>
    </section>
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