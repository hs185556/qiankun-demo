import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Page1View')
    },
    {
      path: '/child/:pathMatch(.*)',
      name: 'microApplications',
      component: () => import('../views/MicroApp.vue'),
      meta: {
        hidden: true
      }
    }
    // {
    //   path: '/child/report',
    //   name: 'report'
    // }
  ]
})

export default router
