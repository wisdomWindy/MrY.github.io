import {createRouter, createWebHistory} from 'vue-router';
import store from '@/store/index';
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path:'/home',
    component:() => import('@/view/Home.vue')
  }]
});

router.beforeEach((to, from, next) => {
  document.title = store.state.webTitle;
  next();
});

export default router