import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

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

let isUserDataLoaded = false

const getUserData = () => {
  return new Promise((resolve) => {
    const user = localStorage.getItem('user')
    resolve(user)
  })
}

router.beforeEach(async (to, from, next) => {
  if (!isUserDataLoaded) {
    try {
      const user = await getUserData()

      if (user) {
        const isValid = JSON.parse(user)
        if (isValid) {
          isUserDataLoaded = true
          next()
        } else if (to.path !== '/auth') {
          next('/auth')
        } else {
          next()
        }
      } else if (to.path !== '/auth') {
        next('/auth')
      } else {
        isUserDataLoaded = true
        next()
      }
    } catch (error) {
      console.error('Error getting user data:', error)
      next('/auth')
    }
  } else {
    next()
  }
})

export default router
