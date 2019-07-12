import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { authRequired } from '@/auth'
import { admRequired } from '@/adm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      beforeEnter: authRequired
    },
    {
      path: '/debug',
      name: 'debug',
      component: () => import(/* webpackChunkName: "debug" */ './views/Debug.vue'),
      beforeEnter: admRequired
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue')
    },
    {
      path: '*',
      name: 'not-found',
      redirect: '/404'
    }
  ]
})
