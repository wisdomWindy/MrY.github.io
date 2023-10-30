import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { Message } from '@element-plus/icons-vue'
import './styles/global.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Element,{
  locale:zhCn
})
app.component('Message', Message)

app.mount('#app')
