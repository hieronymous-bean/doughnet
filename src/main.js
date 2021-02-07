import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './router.js'

import './assets/scss/styles.scss'

const app = createApp(App);
app.use(router);
app.mount('#app');