import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import api from './services/api'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$api = api
app.mount('#app')
