<template>
  <div class="container">
    <base-header></base-header>
    <router-view></router-view>
    <base-footer></base-footer>
  </div>
</template>

<script>
import baseHeader from './components/baseHeader.vue'
import baseFooter from './components/baseFooter.vue'
export default {
  name: 'App',
  components:{
    'base-footer':baseFooter,
    'base-header':baseHeader
  }
}
</script>

<style>
.container{
  width: 100%;
  height: 100%;
}
</style>
