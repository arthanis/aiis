import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: ''
      },
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      meta: {
        title: 'Products'
      },
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: 'Cart'
      },
      component: () => import('../views/CartView.vue')
    }
  ]
})

export default router
