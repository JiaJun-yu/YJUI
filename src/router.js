import Vue from 'vue'
import Router from 'vue-router'
import PC from './views/pc.vue'
import Mobile from './views/mobile.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pc',
      component: PC
    },
    {
      path: '/mobile',
      name: 'mobile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Mobile
    }
  ]
})

const vm = new Vue()
// router.beforeEach((to, from, next) => {
//   vm.$yqjLoadingBar().start()

//   next()
// })

// router.afterEach(() => {
//   vm.$yqjLoadingBar().success()
// })
export default router