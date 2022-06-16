import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path:'/home',
    component:() => import('@/view/Home.vue')
  },{
    path:'/about',
    component:() => import('@/view/about.vue')
  }]
});

router.afterResolve((to, from, next) => {
  console.log(window.location.href);
  console.log(to);
  next();

})
export default router