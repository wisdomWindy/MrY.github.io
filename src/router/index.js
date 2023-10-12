import {createRouter,createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
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
    component:()=>import('@/view/tools/Tool.vue'),
    children:[{
      path:'videoTransform',
      name:'videoTransform',
      component:() => import('@/view/tools/VideoTransform.vue')
    },{
      path:'base64',
      name:'base64',
      component:()=>import('@/view/tools/Base64.vue')
    },{
      path:'docxpreview',
      name:'docxpreview',
      component:()=>import('@/view/tools/Docxpreview.vue')
    }]
  }]
});

export default router