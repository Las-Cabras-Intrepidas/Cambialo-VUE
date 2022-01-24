import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  } /*
  {
    path: '/categoriafiltrada',
    name: 'Filtrada',
    component: () => import('../views/Productosfilter.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
