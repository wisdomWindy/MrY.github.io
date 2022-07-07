<template>
  <div class="container">
    <div class="menus">
      <button class="button" @click="goUrl">go跳转</button>
      <button class="button" @click="backUrl">back返回</button>
      <button class="button" @click="delayAdd">添加delay</button>
      <button class="button" @click="locaUrl">location跳转</button>
    </div>

    <span>{{ num }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import menuback from "@/mixins/index";
export default defineComponent({
  data() {
    return {
      num: 1,
    };
  },
  mixins: [menuback],
  created() {
    setTimeout(() => {
      this.num++;
    }, 3000);
  },

  methods: {
    goUrl() {
      window.history.go(-1);
    },
    backUrl() {
      window.history.back();
    },
    delayAdd() {
      setTimeout(() => {
        this.num++;
      }, 3000);
    },
    locaUrl(){
      window.location.href="http://localhost:8080/dist/#/about?name=fs";
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
.button {
  width: auto;
  padding: 10px 0;
}

</style>