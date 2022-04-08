import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/SignIn.vue')
  },
  {
    path:'/Test01',
    name:'Test01',
    component: () => import('../views/Test01.vue')
  },
  {
    path:'/Test02',
    name:'Test02',
    component: () => import('../views/Test02.vue')
  },
  {
    path:'/Dice',
    name:'Dice',
    component: () => import('../views/Dice.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
