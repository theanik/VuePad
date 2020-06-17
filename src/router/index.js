import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'
import ConditionWorld from '@/components/ConditionWorld'
import List from '@/components/List'
import Computed from '@/components/Computed'
import Event from '@/components/Event'
import Product from '@/components/Product'
import Login from '@/components/Auth/Login'

import store from '../store/index'

Vue.use(Router)


// const ifNotAuthenticated = (to, from, next) => {
//   if (store.getters.isLogin == true) {
//     next()
//     return
//   }
//   next('/')
// }

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLogin == true) {
    next()
    return
  }
  next('/login')
}



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HiWorld',
      component: HiWorld
    },
    {
      path: '/condition',
      nmae: 'ConditionWorld',
      component: ConditionWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/productlist',
      name : 'Product',
      component : Product,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name : 'Login',
      component : Login
    }

  ]
})
