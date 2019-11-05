import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/login.vue")
    }, {
      path: "/",
      name: "index",
      component: () => import("./pages/index.vue")
    },
    {
      path: "/course/:id",
      name: "detail",
      component: () => import("./pages/detail.vue")
    },
    {
      path: "/userCenter",
      name: "userCenter",
      component: () => import("./pages/userCenter.vue")
    }
  ]
})

export default router