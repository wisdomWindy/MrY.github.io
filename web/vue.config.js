const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'/dist',
  assetsDir:'./static/', // 相对于outputDir  ../dist/./static/
  indexPath:'../',
  lintOnSave:false,
  productionSourceMap:false,
  chainWebpack: config => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
})
