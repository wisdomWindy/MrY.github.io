import {createRouter, createWebHashHistory} from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path:'/home',
    name:'home',
    component:() => import('@/view/HomePage.vue')
  },{
    path:'/about',
    name:'about',
    component:() => import('@/view/AboutPage.vue')
  },{
    path:'/tool',
    name:'tool',
    component:()=>import('@/view/tools/Tool.vue')
  }]
});

export default router