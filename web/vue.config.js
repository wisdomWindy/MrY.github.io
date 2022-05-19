const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../dist/',
  publicPath:'./dist/', // 以index.html为参考点
  assetsDir:'./static/', // 相对于outputDir  ../dist/./static/
  indexPath:'../index.html', // 相对于outputDir ../dist/../index.html
  lintOnSave:false,
  productionSourceMap:false
})
