import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }, {
    path: '/tool',
    name: 'tool',
    component: () => import('@/views/tools/Tool.vue'),
    children: [{
      path: 'videoTransform',
      name: 'videoTransform',
      component: () => import('@/views/tools/VideoTransform.vue')
    }, {
      path: 'base64',
      name: 'base64',
      component: () => import('@/views/tools/Base64.vue')
    }, {
      path: 'docxpreview',
      name: 'docxpreview',
      component: () => import('@/views/tools/Docxpreview.vue')
    }]
  }
  ]
})

export default router
