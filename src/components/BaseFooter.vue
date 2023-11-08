<template>
  <div class="container">
    <div class="footer-item">
      <el-space>
        <span>个人制作&copy;版权</span>
        <el-link class="link" href="https://beian.miit.gov.cn" :underline="false" type="info" title="鄂ICP备2021014624号"
          alt="鄂ICP备2021014624号">鄂ICP备2021014624号</el-link>
      </el-space>
    </div>
    <div class="footer-item">
      <el-space>
        <span>powered by</span>
        <el-link href="https://docs.github.com/pages" class="link" :underline="false" type="info" title="gitpages"
          alt="gitpages">gitpages</el-link>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElLink,ElSpace } from 'element-plus';

</script>

<style scoped>
.container
{
  height: 100%;
  background-color: var(--el-color-primary);
  color: #fff;
  font-family: var(--theme-family);
  font-size: var(--theme-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link:hover,
.link
{
  color: #fff;
}
.footer-item{
  display: flex;
  align-items: center;
}
</style>