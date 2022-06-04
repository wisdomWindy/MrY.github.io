const { defineConfig } = require('@vue/cli-service');

// vue中public文件夹放在与src同级目录下，该目录中放置静态资源，引用时路径相对于实际引用的文件
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../dist/', // 输出文件的目录为根目录下的dist
  assetsDir: './', // 相对于outputDir  ../dist/./
  indexPath:'../index.html',
  publicPath:'/dist/',
  lintOnSave:false,
  productionSourceMap:false,
  devServer:{
    static:{
      publicPath:'/dist/dist/images/', // 访问服务器的url，当访问该url时返回对应的资源
      directory:'./public/images/' // 提供资源的文件夹，当访问publicPath时提供directory中的对应内容
    }
  }
})
