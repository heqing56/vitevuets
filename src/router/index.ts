import {createRouter, createWebHistory,NavigationGuardNext,RouteLocationNormalized} from 'vue-router'
import views from './views'
import {getStore} from '@/utils/store'
const router=createRouter({
    history:createWebHistory(),
    routes:views
})

router.beforeEach((to:RouteLocationNormalized, _from: RouteLocationNormalized, next:NavigationGuardNext) => {
  let token = getStore({name:'token'})
  if (to.meta.requireAuth) {
    // 如果用户未能验证身份，则 `next` 会被调用两次
    if (to.name !== 'login' && !token) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router