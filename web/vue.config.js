const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'/dist',
  publicPath:'/', // 以index.html为参考点
  assetsDir:'./static/', // 相对于outputDir  ../dist/./static/
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
