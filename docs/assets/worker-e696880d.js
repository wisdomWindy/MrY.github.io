!function(){"use strict";var e,t;(t=e||(e={})).LOAD="LOAD",t.EXEC="EXEC",t.WRITE_FILE="WRITE_FILE",t.READ_FILE="READ_FILE",t.DELETE_FILE="DELETE_FILE",t.RENAME="RENAME",t.CREATE_DIR="CREATE_DIR",t.LIST_DIR="LIST_DIR",t.DELETE_DIR="DELETE_DIR",t.ERROR="ERROR",t.DOWNLOAD="DOWNLOAD",t.PROGRESS="PROGRESS",t.LOG="LOG",t.MOUNT="MOUNT",t.UNMOUNT="UNMOUNT";const a=new Error("unknown message type"),r=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),s=new Error("failed to import ffmpeg-core.js");let o;self.onmessage=async({data:{id:t,type:E,data:n}})=>{const i=[];let c;try{if(E!==e.LOAD&&!o)throw r;switch(E){case e.LOAD:c=await(async({coreURL:t="https://unpkg.com/@ffmpeg/core@0.12.1/dist/umd/ffmpeg-core.js",wasmURL:a,workerURL:r})=>{const E=!o,n=t,i=a||t.replace(/.js$/g,".wasm"),c=r||t.replace(/.js$/g,".worker.js");try{importScripts(n)}catch{if(self.createFFmpegCore=(await import(n)).default,!self.createFFmpegCore)throw s}return o=await self.createFFmpegCore({mainScriptUrlOrBlob:`${n}#${btoa(JSON.stringify({wasmURL:i,workerURL:c}))}`}),o.setLogger((t=>self.postMessage({type:e.LOG,data:t}))),o.setProgress((t=>self.postMessage({type:e.PROGRESS,data:t}))),E})(n);break;case e.EXEC:c=(({args:e,timeout:t=-1})=>{o.setTimeout(t),o.exec(...e);const a=o.ret;return o.reset(),a})(n);break;case e.WRITE_FILE:c=(({path:e,data:t})=>(o.FS.writeFile(e,t),!0))(n);break;case e.READ_FILE:c=(({path:e,encoding:t})=>o.FS.readFile(e,{encoding:t}))(n);break;case e.DELETE_FILE:c=(({path:e})=>(o.FS.unlink(e),!0))(n);break;case e.RENAME:c=(({oldPath:e,newPath:t})=>(o.FS.rename(e,t),!0))(n);break;case e.CREATE_DIR:c=(({path:e})=>(o.FS.mkdir(e),!0))(n);break;case e.LIST_DIR:c=(({path:e})=>{const t=o.FS.readdir(e),a=[];for(const r of t){const t=o.FS.stat(`${e}/${r}`),s=o.FS.isDir(t.mode);a.push({name:r,isDir:s})}return a})(n);break;case e.DELETE_DIR:c=(({path:e})=>(o.FS.rmdir(e),!0))(n);break;case e.MOUNT:c=(({fsType:e,options:t,mountPoint:a})=>{let r=e,s=o.FS.filesystems[r];return!!s&&(o.FS.mount(s,t,a),!0)})(n);break;case e.UNMOUNT:c=(({mountPoint:e})=>(o.FS.unmount(e),!0))(n);break;default:throw a}}catch(R){return void self.postMessage({id:t,type:e.ERROR,data:R.toString()})}c instanceof Uint8Array&&i.push(c.buffer),self.postMessage({id:t,type:E,data:c},i)}}();
