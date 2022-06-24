<template>
  <div class="container">
    <div class="menus">
      <button @click="goUrl">跳转</button>
      <button @click="backUrl">返回</button>
      <button @click="goLocationTest">goLocationTest</button>
        <button class="button" @click="delayAdd">添加delay</button>
    </div>
    <span>{{numb}}</span>
    <div v-for="(item, index) in arr" :key="index">{{item.name}}</div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
import menuback from "@/mixins/index";
window.addEventListener('beforeunload', (e) => {
  widnow.alert('onbeforeunload');
e.preventDefault();
});
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
    window.onunload = function (){
      window.alert('onUnoad')
    }
    setTimeout(() => {
      this.numb++;
      this.arr.push(this.arr[0]);
    }, 3000);
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.path, from.path);
    next((vm) => {
      // && !/\//.test(from.fullPath)
      if (!/\/about/.test(from.path) ) {
        console.log("about:beforeRouteEnter", !/\/about/.test(from.path));
        window.history.pushState(null, null, "#/about");
        console.log("about:window.location.href", window.location.href);
        vm.$route.query.navigateback= true;
        // if (typeof window.addEventListener != "undefined") {
        //   window.addEventListener("popstate", vm.removePop);
        // } else {
        //   window.attachEvent("onpopstate", vm.removePop);
        // }
      } 
    });
  },
  mounted(){
    window.addEventListener('beforeunload', () => {
      window.alert('hellp')
    })
    console.log('about:mounted', this.$route, window.location.href);
  },
  updated(){
    console.log('navigateback'+this.$route.query.navigateback);
    // if(this.$route.query.navigateback){
    //   window.history.replaceState(null, null, '#/about?tabbar=true');
    //   // this.$router.replace({path:'/about', query:{name:'re'}});
    // }
    console.log('about:updated', this.$route, window.location.href);
  },

  beforeRouteLeave(to, from, next) {
    // console.log('about:leave', to.fullPath, to.path, window.location.href, this.$route);
    window.alert('beforeRouteleave');
    if (typeof window.removeEventListener != "undefined") {
      window.removeEventListener("popstate", this.removePop);
    } else {
      window.detachEvent("onpopstate", this.removePop);
    }
    console.log('about:leave', window.location.href, this.$route);
    if(/\?/.test(this.$route.fullPath)){
      console.log('orders:routeLeave:removePop');
    }
    next();
  },
  beforeUnmount(){
    widnow.alet('about:unmount')
  },
  watch:{
    '$route':function (newRoute, old){
      console.log('routewatch', newRoute, old);
    }
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
      // window.location.href = 'http://localhost:8080/dist/#/test';
      this.$router.replace({path:'/test'});
    },
    delayAdd(){
      setTimeout(() => {
        this.numb++;
        this.arr.push(this.arr[0])
      }, 3000);
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