<template>
 <div class="container">
  <a href="">备案号：</a><span>@copyright</span>
 </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
 data(){
   return {    

    }
  }

})
</script>

<style scoped>
 .container{
   height: 100px;
   background-color: var(themeColor);
   color: #fff;
   font-family: var(themeFamily);
   font-size: var(themeSize);
   display: flex;
   align-items: center;
   justify-content: center;
 }

</style>