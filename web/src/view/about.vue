<template>
 <div class="container">about</div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
 data(){
   return {    

    }
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      window.alert(window.location.href);
      window.history.pushState(null, null, dcoument.URL);
    });
  }
})
</script>

<style scoped>
 
</style>