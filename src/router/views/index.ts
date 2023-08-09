import { type RouteRecordRaw } from 'vue-router'
import pages from '../pages'
const Login=()=>import('@/views/login.vue')
const Index=()=>import('@/views/index.vue')

const views:RouteRecordRaw[]=[
    {
        path: "/login",
        name:'login',
        component: Login,
        meta:{
          title:'登录'
        }
      },
      {
        path: "/",
        component:Index,
        name:'index',
        redirect:'/default/index',  //默认子路由
        meta:{
          title:'首页'
        },
        children:[
            ...pages
        ]
      }
]

export default views