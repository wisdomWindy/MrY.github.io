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
    meta:{
      keepalive:true
    },
    query:{
      tabbar:true
    },
    component:() => import('@/view/about.vue')
  },{
    path:'/test',
    name:'test',
    component:() => import('@/view/test.vue')
  }]
});

if (/\/about/.test(window.location.href)){
  window.addEventListener('popstate', (e) => {
    console.log('routerPop', router);
  });
}

router.beforeEach((to, from, next) => {
  console.log('updateRouterEach', to);
  next();
})
router.afterEach((to, from) => {
  console.log('afterEach:to', to, window.location.href);
});
export default router