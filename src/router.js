import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/theme/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {title: '首页'},
      children: [
        {
          path: '/home/table',
          name: 'table',
          meta: {title: 'Table'},
          component: () => import('@/components/four/table.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login.vue')
    }
  ]
})
