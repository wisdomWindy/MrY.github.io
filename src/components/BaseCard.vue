<template>
 <div class="base-card">
  <el-card :body-style="{ padding: '0px', display: 'flex' }" class="card" >
    <img :src="cardData.imgUrl" class="card_image"/>
    <div class="card_content" style="padding: 14px">
      <div class="card_title">{{ cardData.name }}</div>
      <div class="bottom">{{ cardData.description }}</div>
    </div>
  </el-card>
 </div>
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
  cardData:{
    type:Object,
    default: () => {
      return {}
    }
  }
});


</script>

<style scoped>
 .card{
  height: 130px;
  font-size: 14px;
  margin-bottom: 20px;
}
.card_title{
  font-size:20px;
  font-weight: bold;
}
.card_image{
  display: block;
  width: 100px;
  height: 100px;
  margin:14px 0 0 14px;
}
.card_content{
  flex:1;
}

</style>