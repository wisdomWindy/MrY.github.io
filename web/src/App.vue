<template>
  <div class="root">
    <div class="header"><base-header></base-header></div>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- <router-view></router-view> -->
    </div>
    <div class="footer"><base-footer></base-footer></div>
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
  },
  beforeRouteLeave(to, from, next){
    window.alert('beforeRouteLeave');
    next();
  },
  mounted(){
    // document.body.onunload = function () {
    //   window.alert('onunload');
    // }
  },
  beforeUnmount(){
    // widnow.alert('appunload')
  }
}
</script>

<style>
.root{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
}
.footer,
.header{
  height:auto
}
.main{
  flex:1;
}
.container{
  width: 100%;
  height: 100%;
}
</style>
