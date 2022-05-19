import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  }]
});

router.beforeEach((to, from, next) => {
  document.title = 'website';
  next();
});
export default router