<template>
  <div class="container">
    <div class="menus">
      <button @click="goUrl">跳转</button>
      <button @click="backUrl">返回</button>
      <button @click="goLocationTest">goLocationTest</button>
    </div>
  
    <div v-for="(item, index) in arr" :key="index">{{item.name}}</div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
import menuback from "@/mixins/index";

export default defineComponent({
  data() {
    return {
      numb:3,
      arr:[{
        name:'hwllo'
      },{
        name:'hwrewlo'
      },{
        name:'hfewo'
      },{
        name:'hfso'
      },{
        name:'hwfsdlo'
      },{
        name:'hfwlo'
      },{
        name:'hkuilo'
      },{
        name:'hbnlo'
      }]
    };
  },
  mixins: [menuback],
  created(){
    setTimeout(() => {
      this.numb++;
      this.arr.push(this.arr[0])
    }, 3000);
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!/\/about/.test(from.path)) {
        console.log("about:beforeRouteEnter", !/\/about/.test(from.path));
        window.history.pushState(null, null, "#/about");
        console.log("about:window.location.href", window.location.href);
      } else if (/\?/.test(window.location.href)) {
        console.log('from3', from.fullPath);
        console.log("about:beforeRouteEnter:#");
        window.history.pushState(null, null, "#");
      }
      if (typeof window.addEventListener != "undefined") {
        window.addEventListener("popstate", vm.removePop);
      } else {
        window.attachEvent("onpopstate", vm.removePop);
      }
    });
  },

  updated(){
    console.log('about:update');
  },

  beforeRouteLeave(to, from, next) {
    if (typeof window.removeEventListener != "undefined") {
      window.removeEventListener("popstate", this.removePop);
    } else {
      window.detachEvent("onpopstate", this.removePop);
    }
    next();
  },
  methods: {
    goUrl() {
      // window.location.href = "https://localhost:8080/dist/#/about?name=wb";
      window.history.back();
    },
    backUrl(){
      window.history.go(-1);
    },
     goLocationTest(){
      window.location.href = 'http://localhost:8080/dist/#/test';
    }
  },
});
</script>

<style scoped>
.menus{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button{
  width:auto;
  padding:10px 0;
}
</style>