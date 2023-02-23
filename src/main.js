import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VSwitch from 'v-switch-case'

import './css/index.css'

createApp(App).use(store).use(router).use(VSwitch).mount('#app')
