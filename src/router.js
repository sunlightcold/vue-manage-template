import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/theme/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      meta: {title: '首页'},
      children: [
        {
          path: '/index/table',
          name: 'table',
          meta: {title: 'Table'},
          component: () => import('./views/table/table.vue')
        },
        {
          path: '/nested/menu1',
          name: 'menu1',
          meta: {title: '菜单1'},
          component: () => import('./views/nested/menu1/menu1.vue')
        },
        {
          path: '/nested/menu2',
          name: 'menu2',
          meta: {title: '菜单2'},
          component: () => import('./views/nested/menu2/menu2.vue')
        },
        {
          path: '/nested/menu3',
          name: 'menu3',
          meta: {title: '菜单3'},
          component: () => import('./views/nested/menu3/menu3.vue')
        },
        {
          path: '/nested/menu4/menu4-1',
          name: 'menu4-1',
          meta: {title: '菜单4-1'},
          component: () => import('./views/nested/menu4/menu4-1/menu4-1.vue')
        },
        {
          path: '/nested/menu4/menu4-2',
          name: 'menu4-2',
          meta: {title: '菜单4-2'},
          component: () => import('./views/nested/menu4/menu4-2/menu4-2.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    }
  ]
})
