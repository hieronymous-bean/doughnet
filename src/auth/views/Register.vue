<template>
  <div class="absolute w-screen h-screen flex">
    <div class="hidden lg:block w-5/12 h-full">
      <img
        src="https://images.unsplash.com/photo-1572978373428-ec8ed86dcba6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="w-full lg:w-7/12 overflow-scroll py-24 relative">
      <form class="w-5/6 sm:w-1/2 mx-auto text-center" v-on:submit.prevent="registerNewUser">
        <img
          src=""
          class="h-12 block mx-auto"
        />
        <div class="mt-10">
          <h2 class="text-3xl font-bold text-primary-dark">Sign up for a Doughnet Account</h2>
          <p class="mt-3 text-gray-800">
            Already use Doughnet?
            <router-link
            class="text-primary-base"
            to="/auth/login"
            >Login Here</router-link>
          </p>
        </div>
        <div class="mt-12">
          <div class="my-6">
            <div class="">
              <div class="">
                <input
                  type="email"
                  name="email"
                  v-model="userEmail"
                  class="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-primary-base"
                  placeholder="Your email address"
                />
              </div>
            </div>
          </div>
          <div class="my-6">
            <div class="">
              <div class="">
                <input
                  type="password"
                  name="password"
                  v-model="userPassword"
                  class="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-primary-base"
                  placeholder="Your password"
                />
              </div>
            </div>
          </div>
          <div class="my-6">
            <button
              class="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-primary-base border-primary-base hover:bg-primary-base hover:border-primary-base w-full"
              type="submit"
            >
              Create Account
            </button>
          </div>
          

          <p class="text-sm mt-6 text-left">
            By continuing you accept our
            <a href="#" class="text-primary-base">Terms of Use</a> and
            <a href="#" class="text-primary-base">Privacy Policy</a>.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
      title: 'Register'
  }),
  components: {
  },
  methods: {
  registerNewUser: function(e) {
    e.preventDefault;
    let data = {
      email: this.userEmail,
      password: this.userPassword
    }
    console.log(data);
    this.$store.dispatch('register',data)
  }
}
}
</script>