import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'
import ConditionWorld from '@/components/ConditionWorld'
import List from '@/components/List'

Vue.use(Router)

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
    }
  ]
})
