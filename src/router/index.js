import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registrate',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/productos',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/productos/:id',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/conocenos',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/usuario',
    name: 'UserSection',
    component: () => import('../views/Users.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editar/:id',
    name: 'EditProduct',
    component: () => import('../views/EditProduct.vue')
  },
  {
    path: '/terminos',
    name: 'TermsConditions',
    component: () => import('../views/Terms.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth) {
    auth.onAuthStateChanged((user) => {
      if (!user) next('/login')
      else next()
    })
  } else next()
}) */

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = getAuth()
    const user = auth.currentUser
    console.log('usuario desde router', user)
    if (!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
