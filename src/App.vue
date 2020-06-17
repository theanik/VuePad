<template>
  <div id="app">
    <navbar></navbar>
    <div class="row m-3">
      <div class="container">
      <router-view/>
    </div>
    </div>
  </div>
</template>

<script>

import Navbar from './components/partial/Navbar'
import Counter from './components/Counter'
export default {
  name: 'App',
  components : {
    Navbar,
    Counter
  },
  created(){
    this.$store.dispatch("getUser")
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("LOGOUT_REQUEST")
        }
        throw err;
      });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
}

@import './assets/css/test.css';

</style>
