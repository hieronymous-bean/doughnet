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

app.use(router);
app.use(store);
app.mount('#app');