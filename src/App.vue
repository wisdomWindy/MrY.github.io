<template>
  <div class="root">
    <div class="header"><Base-header></Base-header></div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"><Base-footer></Base-footer></div>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>

<style>
.root{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
}
.footer{
  height:40px;
}
.header{
  height:60px;
}
.main{
  flex:1;
  overflow: hidden;
}
.container{
  width: 100%;
  height: 100%;
}
</style>
