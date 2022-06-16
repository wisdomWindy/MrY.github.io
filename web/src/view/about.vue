<template>
  <div class="container">
    about
    <button @click="goUrl">跳转</button>
    <button @click="backUrl">返回</button>
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
      this.arr.push(this.arr[0]);
    }, 3000);
  },
  beforeRouteEnter(to, from, next) {
    // window.alert("about");
    next((vm) => {
      if (!/\/about/.test(from.path)) {
        console.log("ordrs:beforeRouteEnter", !/\/about/.test(from.path));
        window.history.pushState(null, null, "#/about");
        console.log("orderwindow.location.href", window.location.href);
      } else if (/\?/.test(from.fullPath)) {
        console.log('from3', from.fullPath);
        console.log("orders:beforeRouteEnter:#");
        window.history.pushState(null, null, "#");
      }
      if (typeof window.addEventListener != "undefined") {
        window.addEventListener("popstate", vm.removePop);
      } else {
        window.attachEvent("onpopstate", vm.removePop);
      }
    });
  },

  mounted(){
    console.log('about:mounted', window.location.href);
    // window.alert('aboutmounted');
    // console.log('aboutmounted');
    // window.history.pushState(null, null, '#');
    // if (typeof window.addEventListener != "undefined") {
    //   window.addEventListener("popstate", this.removePop);
    // } else {
    //   window.attachEvent("onpopstate", this.removePop);
    // }
  },
  // updated(){
  //   console.log('aboutupdated', window.location.href);
  //   window.history.pushState(null, null, '#');
  // },
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
    }
  },
});
</script>

<style scoped>
</style>