<template>
 <div class="container">
  个人制作<span>&copy;</span>版权<a href="https://beian.miit.gov.cn">鄂ICP备2021014624号</a>
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
   height: 60px;
   background-color: var(--themeColor);
   color: #fff;
   font-family: var(--themeFamily);
   font-size: var(--themeSize);
   display: flex;
   align-items: center;
   justify-content: center;
 }

</style>