import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import VueComponents from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

const timeStamp = new Date().getTime();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true
    }),
    VueComponents({
      resolvers: [ElementPlusResolver()],
      dts: true
    })
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks:{
          vue:['vue'],
          pinia:['pinia']
        },
        dir: 'docs',
        chunkFileNames: `assets/[name].[hash].${timeStamp}.js`,
        entryFileNames: `assets/[name].[hash].${timeStamp}.js`,
        assetFileNames: `assets/[name].[hash].${timeStamp}.[ext]`
      }
    },
    cssCodeSplit:true,
    cssMinify:true,
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      },
      format:{
        comments:false,
        beautify:false
      }
    }
  }
})
