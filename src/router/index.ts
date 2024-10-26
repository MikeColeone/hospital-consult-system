// 引入router实例
import { pa } from 'element-plus/lib/locale/index.js'
import path from 'path'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'

//import 函数返回的时候什么 promise
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    name:'main',
    children:[
      path:''
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// 路由匹配模式
/*
哈希模式 不刷新 不访问后台 直接访问后台
html5模式： 服务器
memory: URL正常 但是没有适当的服务器配置的话 会返回一个404 解决方法 添加回退路由
*/

// 导出
export default router
