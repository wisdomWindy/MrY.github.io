import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/index';
import router from '@/router/index';
import Element from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import '@/styles/global.css';
import { Message } from '@element-plus/icons-vue';

const app = createApp(App);
app.component('Message',Message);

app.use(store).use(router).use(Element,{
  locale:zhCn
}).mount('#app')
