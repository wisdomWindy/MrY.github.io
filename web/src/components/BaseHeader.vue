<template>
  <div class="container">
    <el-menu 
    class="menu" 
    mode="horizontal" 
    :default-active="menuList[0].path" 
    :unique-opened="true" 
    :router="true">
      <el-menu-item class="menu-item" v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
    <div class="other">
      <el-switch
      v-model="isLight"
      active-text="Light"
      inactive-text="Dark"
      @change="changeSkin"
    />
    </div>
  </div>
</template>

<script setup>
import {ref,onBeforeMount} from "vue";
import {useStore} from 'vuex';
const $store = useStore();
let menuList = ref([]);
let isLight = ref(true);
onBeforeMount(()=>{
  menuList.value = $store.state.menuList;
});

// 换肤
function changeSkin(){
  const el = document.documentElement;
  el.style.setProperty('--el-color-primary', isLight.value ? '#409eff' : '#000');
}
</script>

<style scoped>
.container{
  display: flex;
  align-items:center;
  height:100%;
}
.menu{
  flex:1;
}

.other{
  display: flex;
  align-items: center;
  width: 200px;
}
.btn{
  flex:1;
  margin:0;
}
</style>