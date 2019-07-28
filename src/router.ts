import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { authRequired } from '@/auth'
import { admRequired } from '@/adm'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
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
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import(/* webpackChunkName: "leaderboard" */ './views/Leaderboard.vue')
    },
    {
      path: '/weekly-goals',
      name: 'goals',
      component: () => import(/* webpackChunkName: "goals" */ './views/WeeklyGoals.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import(/* webpackChunkName: "rules" */ './views/Rules.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import(/* webpackChunkName: "report" */ './views/Report.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: "terms" */ './views/Terms.vue')
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import(/* webpackChunkName: "draw" */ './views/Draw.vue'),
      // beforeEnter: authRequired
    },
    {
      path: '/user/:token',
      name: 'private',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      // beforeEnter: authRequired
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: () => import(/* webpackChunkName: "suggest" */ './views/Suggest.vue'),
      // beforeEnter: authRequired
    },
    {
      path: '/debug',
      name: 'debug',
      component: () => import(/* webpackChunkName: "debug" */ './views/Debug.vue'),
      // beforeEnter: admRequired
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
