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
