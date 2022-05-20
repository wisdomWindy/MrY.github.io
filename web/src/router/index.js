import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path:'/home',
    component:() => import('@/view/Home.vue')
  }]
});

export default router