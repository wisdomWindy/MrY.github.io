<template>
  <div class="container">
    <el-menu class="menu" mode="horizontal" :default-active="menuList[0].path" background-color="rgb(10, 143, 255, 1)" active-text-color="#fff" text-color="#fff" :unique-opened="true" :router="true">
      <el-menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
        menuList:[]
    };
  },
  created(){
    this.menuList = this.$store.state.menuList;
  }
});
</script>

<style scoped>
.menu{
 /* background: var(--themeColor);
 color: #fff; */
}

</style>