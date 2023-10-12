<template>
  <div class="video-transform">
    <el-upload
    ref="uploadRef"
    class="upload-demo"
    accept="video/*"
    :auto-upload="false"
    :on-change="handleChange"
    >
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
    </el-upload>
    <video class="video" ref="video"></video>
  </div>
</template>

<script setup>
import {ref } from 'vue';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import {toBlobURL,fetchFile} from '@ffmpeg/util';
import { ElMessage } from 'element-plus';

const video = ref(null);
const ffm = new FFmpeg();
const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd';

async function handleChange(file){
  try{
    await ffm.load({
      coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, 'application/wasm')
    });
    let fileStream = await fetchFile(file.raw);
    // console.log(fileStream)
    let writeFileFlag = await ffm.writeFile('input.wmv', fileStream);
    // console.log(writeFileFlag)
    let res = await ffm.exec(['-i', 'input.wmv','-f','mp4', 'output.mp4']);
    // console.log(res);
    const fileData = await ffm.readFile('output.mp4');
    video.value.src = URL.createObjectURL(new Blob([fileData.buffer], { type: 'video/mp4' }));
   
  }catch(err){
    ElMessage.error({
      message: err.message
    });
  }
  

}
</script>

<style scoped>
 .video{
  width: 400px;
  height: 300px;
 }
</style>