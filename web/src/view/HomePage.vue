<template>
  <div class="container">
    <el-carousel indicator-position="outside" class="carousel">
      <el-carousel-item v-for="(img, index) in swiperList" :key="index">
       <img :src="img.path" :alt="img.alt" class="carousel_img">
      </el-carousel-item>
    </el-carousel>
    <el-tabs v-model="activeName" type="border-card" class="tabs">
      <el-tab-pane label="人物" name="first">
        <el-row justify="space-between" class="row">
          <el-col :span="11" v-for="(black, index) in blackList" :key="index">
            <BaseCard :cardData="black"></BaseCard>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="剧场" name="second">
        <el-row justify="space-between" class="row">
          <el-col :span="11" v-for="(black, index) in blackList" :key="index">
            <BaseCard :cardData="black"></BaseCard>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {ref,onBeforeMount} from 'vue';
import {useStore} from 'vuex';
import { useRoute } from 'vue-router';
import BaseCard from '@/components/BaseCard.vue';

const $store = useStore();
const $route = useRoute();

let swiperList = ref([]);
let activeName = ref('first');
let num = ref(1);
let blackList = ref([]);

onBeforeMount(()=>{
  swiperList.value = $store.state.home.swiperList;
  blackList.value = $store.state.home.blackList;
  setTimeout(() => {
    num.value++;
  }, 2000);
  $store.commit('setTest', $route.query.token);
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel{
  padding:0 20px;
}
.carousel_img{
  object-fit: fill;
  width: 100%;
  height:100%;
}
.tabs{
  margin:0 20px;
}
.row{
  padding:0 20px;
}

</style>
