import Vue from 'vue'
import Router from 'vue-router'
import Hello from './../views/dashboard/Hello'
import Success from './../views/dashboard/Success'
import Error from './../views/dashboard/Error'
import Layout from './../views/layout/Layout'
import Login from './../views/login'

Vue.use(Router)
/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: '首页',
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        name: '简述',
        path: 'dashboard',
        icon: 'quanxian',
        component: Success
      }
    ]
  },
  {
    path: '/description',
    component: Layout,
    name: '说明',
    icon: 'quanxian',
    redirect: '/desc',
    noDropdown: true,
    children: [
      {
        name: '简述',
        path: 'desc',
        icon: 'quanxian',
        component: Success
      }
    ]
  },
  {
    path: '/success',
    name: 'success',
    component: Success,
    hidden: true
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/indexs',
    component: Layout,
    redirect: '/test/test1',
    name: '权限',
    icon: 'quanxian',
    dropdown: true,
    children: [
      {
        path: 'test1',
        component: Hello,
        name: '权限1'
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/test1',
    name: '测试页面',
    icon: 'quanxian',
    dropdown: true,
    children: [
      {
        path: 'test1',
        component: Hello,
        name: '测试页1'
      }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'quanxian',
    children: [
      {
        path: 'index',
        component: Success,
        name: '介绍'
      },
      {
        path: 'keyboard',
        component: Success,
        name: '键盘图表'
      }
    ]
  }
]
