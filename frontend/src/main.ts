import {createApp} from 'vue'
import {createPinia} from 'pinia'
import PrimeVue from 'primevue/config'
import './assets/styles.css'
import App from './App.vue';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
