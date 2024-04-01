<template>
  <div class="container">
    <div class="main">
      <div class="content">{{ result }}</div>
      <div class="btns">
        <el-button class="btn" type="primary" @click="handleGenuineWords">抽取真心话</el-button>
        <el-button class="btn" type="primary" @click="handleGreatAdventures">抽取大冒险</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const result = ref('');
const genuineWords = [
  '你最喜欢的食物是什么？',
'你小时候的梦想是什么？',
'你最喜欢的旅行地点是哪里？',
'你最害怕什么？',
'你最喜欢的季节是什么？',
'你最喜欢的音乐风格是什么？',
'你最喜欢的电影是什么？',
'你最喜欢的书籍是什么？',
'你最喜欢的运动是什么？',
'你最喜欢的动物是什么？',
'你最崇拜的人是谁？',
'你最想去的地方是哪里？',
'你最喜欢的颜色是什么？',
'你最擅长的技能是什么？',
'你最尴尬的经历是什么？',
'你最喜欢的童年记忆是什么？',
'你最喜欢的节日是什么？',
'你最喜欢的老师是谁？',
'你最喜欢的学科是什么？',
'你最害怕失去什么？'
];
const greatAdventures = [
  "在公园里进行一次随机的陌生人采访",
  "尝试制作一种你从未做过的异国料理",
  "在一天内不使用手机或任何电子设备",
  "在公共场所进行一次即兴演讲",
  "学习一种新乐器并演奏一首简单的歌曲",
  "参加一次慈善跑步或步行活动",
  "学习并尝试一种极限运动（如攀岩、跳伞等）",
  "写一封手写信给一位你长久未联系的朋友",
  "挑战自己完成一项你认为自己无法完成的事情",
  "为流浪动物制作并放置一个食物站"
];
const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const handleGenuineWords = () => {
  result.value = genuineWords[getRandom(0, genuineWords.length - 1)];
}

const handleGreatAdventures = () => {
  result.value = greatAdventures[getRandom(0, greatAdventures.length - 1)];
}
</script>

<style scoped>
.main{
  width:80%;
  height:200px;
  margin:20px auto; 
}
.content{
  height:70%;
  width:100%;
  display: flex;
  justify-content: center;
  font-size:30px;
  font-weight: bold;
}
.btns{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn{
  margin-bottom: 20px;
  margin-left:0;
}
</style>