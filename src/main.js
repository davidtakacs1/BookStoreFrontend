import { createApp } from 'vue'
import App from './App.vue'
import store from './lib/store.js'
import router from './lib/router.js'
import {createPinia} from "pinia"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App)
app.use(createPinia)
app.use(router).use(store).mount('#app')

