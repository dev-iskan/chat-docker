import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import './assets/styles.css'
import App from './App.vue'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import router from './router'
import centrifuge from '@/plugins/centrifuge'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(centrifuge)

pinia.use(piniaPluginPersistedState)

app.mount('#app')
