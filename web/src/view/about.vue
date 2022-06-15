<template>
 <div class="container">about</div>
</template>

<script>
import {defineComponent} from 'vue'
import menuback from '@/mixins/index'
export default defineComponent({
 data(){
   return {    

    }
  },
  mixins:[menuback],
 beforeRouteEnter(to, from, next){
    next(vm => {
      if(!/\/about/.test(from.path)){
        console.log('ordrs:beforeRouteEnter', !/\/about/.test(from.path));
        window.history.pushState(null, null, '#/about');
        console.log('orderwindow.location.href', window.location.href);
      } else if(/\?/.test(from.fullPath)){
        console.log('orders:beforeRouteEnter:#');
        window.history.pushState(null, null, '#');
      }
      if (typeof window.addEventListener != "undefined") {
        window.addEventListener("popstate", vm.removePop);
      } else {
        window.attachEvent("onpopstate", vm.removePop);
      }
    });
  },
  beforeRouteLeave(to, from, next){
    if (typeof window.removeEventListener != "undefined") {
      window.removeEventListener("popstate", this.removePop);
    } else {
      window.detachEvent("onpopstate", this.removePop);
    }
    next();
  },
})
</script>

<style scoped>
 
</style>