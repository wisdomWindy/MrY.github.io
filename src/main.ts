import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import './styles/global.css'
import VueLazyLoad from 'vue3-lazyload'

if(import.meta.env.mode==='development'){
const app = createApp(App)
app.use(VueLazyLoad, {})
app.use(createPinia())
app.use(router)

app.mount('#app')
} else {
  const app = Vue.createApp(App);
  app.use(VueLazyLoad, {})
  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

