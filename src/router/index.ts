import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized
} from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('@/views/tools/Tool.vue'),
    children: [
      {
        path: 'videoTransform',
        name: 'videoTransform',
        component: () => import('@/views/tools/VideoTransform.vue')
      },
      {
        path: 'base64',
        name: 'base64',
        component: () => import('@/views/tools/Base64.vue')
      },
      {
        path: 'docxpreview',
        name: 'docxpreview',
        component: () => import('@/views/tools/Docxpreview.vue')
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  const routes = router.getRoutes();
  if (routes.length > 1) {
    next();
  } else {
    const localRoutes = localStorage.getItem('routes');
    if (localRoutes) {
      router.addRoute(JSON.parse(localRoutes));
      router.push('/');
    } else {
      next('/');
    }
  }
});

export default router;
