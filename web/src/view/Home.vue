<template>
  <div class="container">
   <menu mode="horizontal" :default-active="menuList[0].path" :unique-opened="true" :router="true">
    <menu-item v-for="(menu, index) in menuList" :key="index" :index="menu.path">{{menu.label}}</menu-item>
   </menu>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      menuList:[]
    }
  },
  created(){
    this.menuList = this.$store.state.menuList;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
