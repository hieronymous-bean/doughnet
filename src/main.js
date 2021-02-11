import { createApp } from 'vue'
import './global/css/tailwind.css'
import App from './App.vue'
import router from './router.js'

import store from './auth/store/auth.js'

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');