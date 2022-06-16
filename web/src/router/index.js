import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path:'/home',
    name:'home',
    component:() => import('@/view/Home.vue')
  },{
    path:'/about',
    name:'about',
    component:() => import('@/view/about.vue')
  },{
    path:'/test',
    name:'test',
    component:() => import('@/view/test.vue')
  }]
});

router.afterEach((to, from) => {
  console.log('afterResolve', window.location.href);
  console.log('afterEach:to', to);
});
export default router