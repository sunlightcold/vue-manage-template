import Vue from 'vue'
import Router from 'vue-router'
import Theme from './views/theme/index.vue'

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
      name: 'home',
      component: Theme,
      meta: { title: '首页', floatTitle: '首页' },
      children: [
        {
          path: '/index/home',
          // name: 'home',
          meta: { title: '首页' },
          component: () => import('./views/home/home.vue')
        },
        {
          path: '/index/table',
          name: 'table',
          meta: { title: 'Table', floatTitle: 'Table' },
          component: () => import('./views/table/table.vue')
        },
        {
          path: '/nested/menu1',
          name: 'menu1',
          meta: { title: '嵌套路由 > 菜单1', floatTitle: '菜单1' },
          component: () => import('./views/nested/menu1/menu1.vue')
        },
        {
          path: '/nested/menu2',
          name: 'menu2',
          meta: { title: '嵌套路由 > 菜单2', floatTitle: '菜单2' },
          component: () => import('./views/nested/menu2/menu2.vue')
        },
        {
          path: '/nested/menu3',
          name: 'menu3',
          meta: { title: '嵌套路由 > 菜单3', floatTitle: '菜单3' },
          component: () => import('./views/nested/menu3/menu3.vue')
        },
        {
          path: '/nested/menu4/menu4-1',
          name: 'menu4-1',
          meta: { title: '嵌套路由 > 菜单4 > 菜单4-1', floatTitle: '菜单4-1' },
          component: () => import('./views/nested/menu4/menu4-1/menu4-1.vue')
        },
        {
          path: '/nested/menu4/menu4-2',
          name: 'menu4-2',
          meta: { title: '嵌套路由 > 菜单4 > 菜单4-2', floatTitle: '菜单4-2' },
          component: () => import('./views/nested/menu4/menu4-2/menu4-2.vue')
        },
        {
          path: '/index/tags',
          name: 'tags',
          meta: { title: 'tags', floatTitle: 'tags' },
          component: () => import('./views/tags/tags')
        },
        {
          path: '/charts/line',
          name: 'line',
          meta: { title: 'charts > line', floatTitle: 'line' },
          component: () => import('./views/charts/line')
        },
        {
          path: '/charts/bar',
          name: 'bar',
          meta: { title: 'charts > bar', floatTitle: 'bar' },
          component: () => import('./views/charts/bar')
        },
        {
          path: '/charts/pie',
          name: 'pie',
          meta: { title: 'charts > pie', floatTitle: 'pie' },
          component: () => import('./views/charts/pie')
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
