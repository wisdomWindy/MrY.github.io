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


module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../dist/', // 输出文件的目录为根目录下的dist
  assetsDir: './static/', // 相对于outputDir  ../dist/./static/
  indexPath:'../index.html',
  lintOnSave:false,
  productionSourceMap:false,
})
