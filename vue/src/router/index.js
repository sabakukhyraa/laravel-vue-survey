import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../components/AuthLayout.vue"
import Dashboard from "../view/Dashboard.vue"
import Surveys from "../view/Surveys.vue"
import Login from "../view/Login.vue"
import Register from "../view/Register.vue"
import DefaultLayout from "../components/DefaultLayout.vue"
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard', name: 'Dashboard', component: Dashboard
      },
      {
        path: '/surveys', name: 'Surveys', component: Surveys
      },
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'})
  } else if (store.state.user.token && (to.meta.isGuest)) {
    next({name: 'Dashboard'})
  } else {
    next()
  }
})


export default router
