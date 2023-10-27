import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import type { UserEntity } from '@/types'

const canUserAccess = async (to: RouteLocationNormalized) => {
  const user = localStorage.getItem('username')

  if (user) return true
  else return false
}

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout
  },
  {
    path: '/',
    name: 'chat',
    component: DefaultLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const canAccess = await canUserAccess(to)
  if (!canAccess && to.path !== '/auth') {
    next('/auth')
  } else {
    next()
  }
})

export default router
