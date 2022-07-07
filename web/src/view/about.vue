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

  methods: {
    back() {
      // window.location.href = "https://localhost:8080/dist/#/about?name=wb";
      window.history.back();
    },
    goIndex(){
      window.history.go(-1);
    },
     goLocationUrl(){
      window.location.href = 'http://localhost:8080/dist/#/test';
    },
    replaceGoTest(){
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