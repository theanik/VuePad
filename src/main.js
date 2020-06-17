// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './assets/css/test.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'




Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)



const token = localStorage.getItem('auth-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer '+token
}


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
