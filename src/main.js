import { createApp } from 'vue'
import './global/assets/css/tailwind.css'
import App from './App.vue'
import router from './router.js'

import firebase from 'firebase/app';
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"
import { firebaseConfig } from './global/config/firebase.js'
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import store from './auth/store/auth.js'

const app = createApp(App);

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

app.use(router);
app.use(store);
app.directive("click-outside", clickOutside);
app.mount('#app');