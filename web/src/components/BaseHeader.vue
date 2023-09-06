<template>
  <div class="container">
    <el-menu 
    class="menu" 
    mode="horizontal" 
    :default-active="menuList[0].path" 
    background-color="var(--el-color-primary)" 
    active-text-color="#fff" 
    text-color="#fff" 
    :unique-opened="true" 
    :router="true">
      <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
    <div class="other">
      <el-switch
      v-model="isDark"
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
let isDark = ref(false);
onBeforeMount(()=>{
  menuList.value = $store.state.menuList;
});

// 换肤
function changeSkin(){
  const el = document.documentElement;
  el.style.setProperty('--el-color-primary', isDark.value ? '#000' : '#409eff');
}
</script>

<style scoped>
.container{
  display: flex;
  align-items:center;
  background-color: var(--el-color-primary);
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