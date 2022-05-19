<template>
  <div class="container">
    <ul class="list">
      <li class="list_item"></li>
      <li class="list_item"></li>
      <li class="list_item"></li>
      <li class="list_item"></li>
      <li class="list_item"></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.list {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list_item {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(themeSize);
  font-family: var(themeFamily);
}
</style>