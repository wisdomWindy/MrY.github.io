<template>
  <div class="container">
    <el-menu 
    class="menu" 
    mode="horizontal" 
    :default-active="menuList[0].path" 
    background-color="rgb(10, 143, 255, 1)" 
    active-text-color="#fff" 
    text-color="#fff" 
    :unique-opened="true" 
    :router="true">
      <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
    <div class="other">
      <el-button @click="changeSkin" size="small">换肤</el-button>
    </div>
  </div>
</template>

<script setup>
import {ref,onBeforeMount} from "vue";
import {useStore} from 'vuex';
const $store = useStore();
let menuList = ref([]);
onBeforeMount(()=>{
  menuList.value = $store.state.menuList;
});
function changeSkin(){

}
</script>

<style scoped>
.container{
  display: flex;
  align-items:center;
  background-color: var(--themeColor);
}
.menu{
  flex:1;
}
.other{
  width: 100px;
}

</style>