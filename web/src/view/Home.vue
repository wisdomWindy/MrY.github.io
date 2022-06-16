<template>
  <div class="container">
    <el-carousel indicator-position="outside" class="carousel">
      <el-carousel-item v-for="(img, index) in swiperList" :key="index">
       <img :src="img.path" :alt="img.alt" class="carousel_img">
       <!-- <img src="../assets/images/moiverout1.jpg" alt=""> -->
      </el-carousel-item>
    </el-carousel>
   <el-tabs v-model="activeName" type="border-card" class="tabs" @tab-click="handleClick">
    <el-tab-pane label="人物" name="first">
      <el-row justify="space-between" class="row">
        <el-col :span="11" v-for="(black, index) in blackList" :key="index">
          <el-card :body-style="{ padding: '0px',display:'flex'}" class="card" >
            <img
              :src="black.img"
              class="card_image"
            />
            <div class="card_content" style="padding: 14px">
              <div class="card_title">{{black.name}}</div>
              <div class="bottom">{{black.description}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="剧场" name="second">
      <el-row justify="space-between" class="row">
        <el-col :span="11" v-for="(black, index) in blackList" :key="index">
          <el-card :body-style="{ padding: '0px',display:'flex'}" class="card" >
            <img
              :src="black.img"
              class="card_image"
            />
            <div class="card_content" style="padding: 14px">
              <div class="card_title">{{black.name}}</div>
              <div class="bottom">{{black.description}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
   <button @click="goUrl">跳转</button>
   <button @click="backUrl">返回</button>
  </div>
</template>

<script>
import menuback from '@/mixins/index'
export default {
  name: 'Home',
  data(){
    return {
      swiperList:[],
      activeName:'first'
    }
  },
  mixins:[menuback],
  created(){
    console.log(this.$store.state.home.swiperList[0]);
    this.swiperList = this.$store.state.home.swiperList;
    this.blackList = this.$store.state.home.blackList;
    setTimeout(() => {
      window.history.go(-1);
      
    }, 3000);
  },
  beforeRouteEnter(to, from, next){
    if(/#$/.test(window.location.href)){
      next();
    } else {  
      next(vm =>{
        console.log('window.history', window.history);
        if(!/\/home/.test(from.path)){
          window.history.pushState(null, null, '#');
          }
        if (typeof window.addEventListener != "undefined") {
          window.addEventListener("popstate", vm.removePop);
        } else {
          window.attachEvent("onpopstate", vm.removePop);
        }
      });
    } 
    
  },
  mounted(){
    if(/#$/.test(window.location.href)){
      this.blackList.push(this.blackList[0]);
    }
  },
  beforeUpdate(){
    console.log('homebeforeupdate', window.location.href);
  },
  updated(){
    console.log('homeupdated', window.location.href);
  },
  beforeRouteLeave(to, from, next){
    if (typeof window.removeEventListener != "undefined") {
      window.removeEventListener("popstate", this.removePop);
    } else {
      window.detachEvent("onpopstate", this.removePop);
    }
    next();
  },
 
  methods:{
    goUrl(){
      window.location.href = "https://wisdomwindy.github.io/#/about?name=wb";
    },
    backUrl(){
      window.history.go(-1);
    }
  }

}
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
