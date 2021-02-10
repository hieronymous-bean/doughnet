import { createApp } from 'vue'
import './global/css/tailwind.css'
import App from './App.vue'
import router from './router.js'

import firebase from 'firebase'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyB5Cx1psBkAiehC_q0zJ6c1u3dpSL4ScGU",
    authDomain: "doughnet-01.firebaseapp.com",
    projectId: "doughnet-01",
    storageBucket: "doughnet-01.appspot.com",
    messagingSenderId: "465162683465",
    appId: "1:465162683465:web:080f99f6c77141f80b2b98",
    measurementId: "G-1DC4QQPF6X"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const app = createApp(App);
app.use(router);
app.mount('#app');