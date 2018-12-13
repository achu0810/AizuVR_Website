import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Info from '@/components/about/Info'
import MyHistory from '@/components/about/MyHistory'
import DepartmentForm from '@/components/about/DepartmentForm'
import Contacts from '@/components/contacts/Contacts'

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
    },{
      path: '/history',
      name: 'History',
      component: MyHistory
    },{
      path: '/departmentform',
      name: 'DepartmentForm',
      component: DepartmentForm
    },{
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
