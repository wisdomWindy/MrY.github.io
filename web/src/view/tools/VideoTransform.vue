<template>
  <div class="video-transform">
    <el-upload
    ref="uploadRef"
    class="upload-demo"
    accept="video/*"
    :auto-upload="false"
    :on-change="handleBeforeUpload"
    >
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
    </el-upload>
    <video ref="video"></video>
  </div>
</template>

<script setup>
import {ref } from 'vue';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import {toBlobURL,fetchFile} from '@ffmpeg/util';

const video = ref(null);
const ffm = new FFmpeg();
const baseUrl = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd';

async function handleBeforeUpload(file){
  try{
    await ffm.load({
      coreURL: await toBlobURL(`${baseUrl}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseUrl}/ffmpeg-core.wasm`, 'application/wasm')
    });
    await ffm.writeFile('input.wmv', await fetchFile(file.raw));
    
    let res = await ffm.exec(['-i', 'input.wmv', 'output.mp4']);
    console.log(res)
    const fileData = await ffm.readFile('output.mp4');
    console.log(fileData);
    video.value.src = URL.createObjectURL(new Blob([fileData.buffer], { type: 'video/mp4' }));
    console.log(URL.createObjectURL(new Blob([fileData.buffer], { type: 'video/mp4' })))
  }catch(err){
    console.log(err);
  }
  

}
</script>

<style scoped>
 
</style>