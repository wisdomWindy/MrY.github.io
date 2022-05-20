const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// 服务器根目录 web目录用ROOT表示：ROOT/web
const ROOT = path.resolve(__dirname, '..');

// 打包输出文件目录
const outputDir = path.join(ROOT, 'dist/');

// 服务器访问目录
const publicPath = path.join(ROOT);

// 静态文件输出目录
const assetsDir = path.join(ROOT, 'static/');

// vue中public文件夹放在与src同级目录下，该目录中放置静态资源，引用时路径相对于实际引用的文件
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../dist/', // 输出文件的目录为根目录下的dist
  assetsDir: './', // 相对于outputDir  ../dist/./
  publicPath: '/dist/', // 打包后的引入资源地址的目录
  indexPath:'../index.html',
  lintOnSave:false,
  productionSourceMap:false
})
