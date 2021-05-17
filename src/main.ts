import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles.css"

// @ts-ignore
import VueLazyImage from '@techassi/vue-lazy-image'

const app = createApp(App)
app.use(router)
app.use(VueLazyImage)
app.mount('#app')
