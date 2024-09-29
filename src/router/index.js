import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import Auth from '@/components/Auth/Auth.vue';
import { account } from '@/lib/appwrite';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/pages/ChatPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/peoples',
      name: 'peoples',
      component: () => import('@/pages/PeoplePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/pages/SettingsPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
});


router.beforeEach(async (to, from, next) => {
  try {
    const user = null;
    const isAuthenticated = !!user;

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next({ name: 'auth' });
    } else {
      next();
    }
  } catch (error) {
    next({ name: 'auth' });
  }
});


export default router;
