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
      redirect: 'app/dashboard',
      component: () => import('../template/DefaultLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../pages/HomeView.vue')
        },
        {
          path: 'employees',
          name: 'employees',
          component: () => import('../pages/EmployeesView.vue')
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ]
})

export default router
