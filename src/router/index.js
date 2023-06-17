import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue'),
    },
    {
      path: '/app',
      name: 'template',
      redirect: 'app/home',
      component: () => import('../template/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../pages/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
