import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: '/statewise',
    name: 'Statewise',
    component: () => import(/* webpackChunkName: "statewise" */ '../views/Statewise.vue')
  },
  {
    path: '/resources',
    name: 'resource',
    component: () => import(/* webpackChunkName: "resource" */ '../views/Resource.vue')
  },
  {
    path: '/worldwide',
    name: 'Worldwide',
    component: () => import(/* webpackChunkName: "Worldwide" */ '../views/Worldwide.vue')
  },
  {
    path: '/helpinghands',
    name: 'helpinghands',
    component: () => import(/* webpackChunkName: "helpinghands" */ '../views/Helpinghands.vue')
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import(/* webpackChunkName: "tips" */ '../views/Tips.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import(/* webpackChunkName: "donate" */ '../views/Donate.vue')
  },
  {
    path: '/version',
    name: 'version',
    component: () => import(/* webpackChunkName: "version" */ '../views/Version.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
