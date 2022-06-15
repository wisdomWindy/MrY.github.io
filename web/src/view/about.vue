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
      window.history.pushState(null, null, '#/home')
    });
  }

})
</script>

<style scoped>
 
</style>