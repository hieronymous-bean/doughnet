<template>
  <div class="absolute w-screen h-screen flex">
    <div class="hidden lg:block w-4/12 h-full">
      <img
        src="https://images.unsplash.com/photo-1542332948209-b580010fd27e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="w-full lg:w-8/12 overflow-scroll py-24 relative">
      <form class="w-5/6 sm:w-1/2 mx-auto text-center" v-on:submit.prevent="userLogin">
        <img
          src=""
          class="h-12 block mx-auto"
        />
        <div class="mt-10">
          <h2 class="text-5xl font-bold text-primary-darkest">Nice to see you again.</h2>
          <p class="mt-3 text-gray-800">
            New to Doughnet? 
            <router-link
            class="text-primary-light"
            to="/auth/register"
            >Create an account</router-link>
          </p>
        </div>
        <div class="mt-6">
          <div class="py-6">
            <Form @submit="userLogin">
              <div class="relative mb-3">
                <Field name="userEmail" :rules="usernameRules" v-model="userEmail" placeholder="Email Address" class="py-3 px-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
                <ErrorMessage name="userEmail" class="absolute top-3 right-8 font-light text-xs text-red-900" />
              </div>
              <div class="relative my-3">
                <Field name="userPassword" :rules="passwordRules" v-model="userPassword" placeholder="Password" class="py-3 px-1 col-span-3 font-light outline-none focus:ring-primary-light focus:border-primary-light flex-1 block w-full rounded text-sm border border-gray-200"/>
                <ErrorMessage name="userPassword" class="absolute top-3 right-8 font-light text-xs text-red-900" />
              </div>
              
              
              <div class="sm:flex sm:flex-row-reverse">
                <button
                class="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-primary-base border-primary-base hover:bg-primary-base hover:border-primary-base w-full"
                type="submit"
                >
                Log In
              </button>
              </div>
            </Form> 
          </div>
          <div class="text-right">
            <a href="#" class="text-primary-base">Forgot your password?</a>
          </div>
          
          <div class="mt-6 border-t border-b border-gray-300">
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  class="w-6 h-6 text-primary-base focus:ring-primary-base border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary-base"
                  checked=""
                /><label class="ml-2 text-sm" for="rememberMe"
                  >Remember this device</label
                >
              </div>
            </div>
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

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
  data: function() {
        return {
      title: 'Login',
      userEmail: '',
      userPassword: '',
      usernameRules: yup.string().email().required('This field is required.'),
      passwordRules: yup.string().required('This field is required.')
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
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