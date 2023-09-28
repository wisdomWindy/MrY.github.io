"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[225],{5225:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var r=a(3396),i=a(4870);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function o(e,t,a){n(e,t),t.set(e,a)}function l(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=a}}function c(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}function h(e,t,a){var r=c(e,t,"set");return l(e,r,a),a}function d(e,t){return t.get?t.get.call(e):t.value}function f(e,t){var a=c(e,t,"get");return d(e,a)}var u;(function(e){e["LOAD"]="LOAD",e["EXEC"]="EXEC",e["WRITE_FILE"]="WRITE_FILE",e["READ_FILE"]="READ_FILE",e["DELETE_FILE"]="DELETE_FILE",e["RENAME"]="RENAME",e["CREATE_DIR"]="CREATE_DIR",e["LIST_DIR"]="LIST_DIR",e["DELETE_DIR"]="DELETE_DIR",e["ERROR"]="ERROR",e["DOWNLOAD"]="DOWNLOAD",e["PROGRESS"]="PROGRESS",e["LOG"]="LOG"})(u||(u={}));const p=(()=>{let e=0;return()=>e++})(),E=(new Error("unknown message type"),new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first")),w=new Error("called FFmpeg.terminate()");new Error("failed to import ffmpeg-core.js");var R=new WeakMap,y=new WeakMap,m=new WeakMap,L=new WeakMap,b=new WeakMap,g=new WeakMap,v=new WeakMap;class D{constructor(){o(this,R,{writable:!0,value:null}),o(this,y,{writable:!0,value:{}}),o(this,m,{writable:!0,value:{}}),o(this,L,{writable:!0,value:[]}),o(this,b,{writable:!0,value:[]}),s(this,"loaded",!1),o(this,g,{writable:!0,value:()=>{f(this,R)&&(f(this,R).onmessage=({data:{id:e,type:t,data:a}})=>{switch(t){case u.LOAD:this.loaded=!0,f(this,y)[e](a);break;case u.EXEC:case u.WRITE_FILE:case u.READ_FILE:case u.DELETE_FILE:case u.RENAME:case u.CREATE_DIR:case u.LIST_DIR:case u.DELETE_DIR:f(this,y)[e](a);break;case u.LOG:f(this,L).forEach((e=>e(a)));break;case u.PROGRESS:f(this,b).forEach((e=>e(a)));break;case u.ERROR:f(this,m)[e](a);break}delete f(this,y)[e],delete f(this,m)[e]})}}),o(this,v,{writable:!0,value:({type:e,data:t},a=[])=>f(this,R)?new Promise(((r,i)=>{const s=p();f(this,R)&&f(this,R).postMessage({id:s,type:e,data:t},a),f(this,y)[s]=r,f(this,m)[s]=i})):Promise.reject(E)}),s(this,"load",((e={})=>(f(this,R)||(h(this,R,new Worker(new URL(a.p+a.u(999),a.b),{type:void 0})),f(this,g).call(this)),f(this,v).call(this,{type:u.LOAD,data:e})))),s(this,"exec",((e,t=-1)=>f(this,v).call(this,{type:u.EXEC,data:{args:e,timeout:t}}))),s(this,"terminate",(()=>{const e=Object.keys(f(this,m));for(const t of e)f(this,m)[t](w),delete f(this,m)[t],delete f(this,y)[t];f(this,R)&&(f(this,R).terminate(),h(this,R,null),this.loaded=!1)})),s(this,"writeFile",((e,t)=>{const a=[];return t instanceof Uint8Array&&a.push(t.buffer),f(this,v).call(this,{type:u.WRITE_FILE,data:{path:e,data:t}},a)})),s(this,"readFile",((e,t="binary")=>f(this,v).call(this,{type:u.READ_FILE,data:{path:e,encoding:t}}))),s(this,"deleteFile",(e=>f(this,v).call(this,{type:u.DELETE_FILE,data:{path:e}}))),s(this,"rename",((e,t)=>f(this,v).call(this,{type:u.RENAME,data:{oldPath:e,newPath:t}}))),s(this,"createDir",(e=>f(this,v).call(this,{type:u.CREATE_DIR,data:{path:e}}))),s(this,"listDir",(e=>f(this,v).call(this,{type:u.LIST_DIR,data:{path:e}}))),s(this,"deleteDir",(e=>f(this,v).call(this,{type:u.DELETE_DIR,data:{path:e}})))}on(e,t){"log"===e?f(this,L).push(t):"progress"===e&&f(this,b).push(t)}off(e,t){"log"===e?h(this,L,f(this,L).filter((e=>e!==t))):"progress"===e&&h(this,b,f(this,b).filter((e=>e!==t)))}}a(2801);const I=new Error("failed to get response body reader"),_=new Error("failed to complete download"),A="Content-Length",T=e=>new Promise(((t,a)=>{const r=new FileReader;r.onload=()=>{const{result:e}=r;e instanceof ArrayBuffer?t(new Uint8Array(e)):t(new Uint8Array)},r.onerror=e=>{a(Error(`File could not be read! Code=${e?.target?.error?.code||-1}`))},r.readAsArrayBuffer(e)})),k=async e=>{let t;if("string"===typeof e)t=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0))):await(await fetch(e)).arrayBuffer();else if(e instanceof URL)t=await(await fetch(e)).arrayBuffer();else{if(!(e instanceof File||e instanceof Blob))return new Uint8Array;t=await T(e)}return new Uint8Array(t)},F=async(e,t)=>{const a=await fetch(e);let r;try{const i=parseInt(a.headers.get(A)||"-1"),s=a.body?.getReader();if(!s)throw I;const n=[];let o=0;for(;;){const{done:a,value:r}=await s.read(),l=r?r.length:0;if(a){if(-1!=i&&i!==o)throw _;t&&t({url:e,total:i,received:o,delta:l,done:a});break}n.push(r),o+=l,t&&t({url:e,total:i,received:o,delta:l,done:a})}const l=new Uint8Array(o);let c=0;for(const e of n)l.set(e,c),c+=e.length;r=l.buffer}catch(i){r=await a.arrayBuffer(),t&&t({url:e,total:r.byteLength,received:r.byteLength,delta:0,done:!0})}return r},O=async(e,t,a=!1,r)=>{const i=a?await F(e,r):await(await fetch(e)).arrayBuffer(),s=new Blob([i],{type:t});return URL.createObjectURL(s)};var W=a(7178);const U={class:"video-transform"},C=(0,r.Uk)("select file");var M={name:"VideoTransform",setup(e){const t=(0,i.iH)(null),a=new D,s="https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";async function n(e){try{await a.load({coreURL:await O(`${s}/ffmpeg-core.js`,"text/javascript"),wasmURL:await O(`${s}/ffmpeg-core.wasm`,"application/wasm")});let r=await k(e.raw);await a.writeFile("input.wmv",r),await a.exec(["-i","input.wmv","-f","mp4","output.mp4"]);const i=await a.readFile("output.mp4");t.value.src=URL.createObjectURL(new Blob([i.buffer],{type:"video/mp4"}))}catch(r){W.z8.error({message:r.message})}}return(e,a)=>{const i=(0,r.up)("el-button"),s=(0,r.up)("el-upload");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r.Wm)(s,{ref:"uploadRef",class:"upload-demo",accept:"video/*","auto-upload":!1,"on-change":n},{trigger:(0,r.w5)((()=>[(0,r.Wm)(i,{type:"primary"},{default:(0,r.w5)((()=>[C])),_:1})])),_:1},512),(0,r._)("video",{class:"video",ref_key:"video",ref:t},null,512)])}}},S=a(89);const j=(0,S.Z)(M,[["__scopeId","data-v-60d1a494"]]);var B=j}}]);