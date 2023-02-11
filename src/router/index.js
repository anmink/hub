import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ScanningView from '../views/ScanningView.vue'
import RollDetailView from '../views/RollDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/scan',
      name: 'scan',
      component: ScanningView,
    },
    {
      path: '/details',
      name: 'details',
      component: RollDetailView,
    },
  ],
})

export default router
