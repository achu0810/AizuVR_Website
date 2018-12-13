import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Info from '@/components/about/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
