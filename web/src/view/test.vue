<template>
  <div class="container">
    <div class="menus">
      <button class="button" @click="goUrl">go跳转</button>
      <button class="button" @click="backUrl">back返回</button>
      <button class="button" @click="delayAdd">添加delay</button>
      <button class="button" @click="locaUrl">location跳转</button>
    </div>

    <span>{{ num }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import menuback from "@/mixins/index";
export default defineComponent({
  data() {
    return {
      num: 1,
    };
  },
  mixins: [menuback],
  created() {
    setTimeout(() => {
      this.num++;
    }, 3000);
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log("window.history", window.history);
      if (!/\/test/.test(from.path)) {
        window.history.pushState(null, null, "#/test");
      }
      if (typeof window.addEventListener != "undefined") {
        window.addEventListener("popstate", vm.removePop);
      } else {
        window.attachEvent("onpopstate", vm.removePop);
      }
    });
  },
  mounted() {
    // console.log('home:mounted', window.location.href);
    // window.history.pushState(null, null, '#/home');
    // if (typeof window.addEventListener != "undefined") {
    //   window.addEventListener("popstate", this.removePop);
    // } else {
    //   window.attachEvent("onpopstate", this.removePop);
    // }
  },
  beforeRouteLeave(to, from, next) {
    if (typeof window.removeEventListener != "undefined") {
      window.removeEventListener("popstate", this.removePop);
    } else {
      window.detachEvent("onpopstate", this.removePop);
    }
    next();
  },
  watch:{
    '$route':function(newRoute, old){
      console.log('watchroute', newRoute, old);
    }
  },
  methods: {
    goUrl() {
      window.history.go(-1);
    },
    backUrl() {
      window.history.back();
    },
    delayAdd() {
      setTimeout(() => {
        this.num++;
      }, 3000);
    },
    locaUrl(){
      window.location.href="http://localhost:8080/dist/#/about";
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
.button {
  width: auto;
  padding: 10px 0;
}

</style>