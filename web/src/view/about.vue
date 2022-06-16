<template>
  <div class="container">
    about
    <button @click="goUrl">跳转</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import menuback from "@/mixins/index";
// window.onpageshow = function(){
//   if(/\/orders\?/.test(window.location.href)){
//     window.addEventListener('popstate', menuback.methods.removePop);
//   }
// }
export default defineComponent({
  data() {
    return {};
  },
  mixins: [menuback],
  beforeRouteEnter(to, from, next) {
    // window.alert("about");
    next((vm) => {
      if (!/\/about/.test(from.path)) {
        // window.alert('from1');
        console.log('form1');
        console.log("ordrs:beforeRouteEnter", !/\/about/.test(from.path));
        window.history.pushState(null, null, "#");
        console.log("orderwindow.location.href", window.location.href);
      } else if (/\?/.test(from.fullPath)) {
        console.log('from3', from.fullPath);
        console.log("orders:beforeRouteEnter:#");
        window.history.pushState(null, null, "#");
      } else{
        console.log('#')
        window.history.pushState(null, null, "#");
      }
      if (typeof window.addEventListener != "undefined") {
        window.addEventListener("popstate", vm.removePop);
      } else {
        window.attachEvent("onpopstate", vm.removePop);
      }
    });
  },
  beforeUpdate(){
    console.log('beforeUpdate', window.location.href);
    if(/#$/.test(window.location.href)){
      console.log('aboutupdate:#');
      window.history.go(-1);
    }
  },
  mounted(){
    window.alert('aboutmounted');
    console.log('aboutmounted')
  },
  updated(){
    console.log('aboutupdated', window.location.href);
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
      // window.location.href = "https://wisdomwindy.github.io/#/about?name=wb";
      window.history.back();
    },
  },
});
</script>

<style scoped>
</style>