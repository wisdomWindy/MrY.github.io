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
    meta:{
      keepalive:true
    },
    query:{
      tabbar:true
    },
    component:() => import('@/view/AboutPage.vue')
  }]
});

export default router