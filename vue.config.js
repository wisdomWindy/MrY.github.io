const { defineConfig } = require('@vue/cli-service');
const CDNPlugin = require('webpack-cdn-plugin');
const WebpackImageCompression = require('webpack-image-compression');
const timeStamp = Date.now();
// vue中public文件夹放在与src同级目录下，该目录中放置静态资源，引用时路径相对于实际引用的文件
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs', // 输出文件的目录为根目录下的docs
  publicPath: '/',
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.output.filename = `js/[name].[chunkhash].${timeStamp}.js`;
    config.output.chunkFilename = `js/[name].[chunkhash].${timeStamp}.js`;
    // 清除console代码
    let optimizationCompress = config.optimization.minimizer[0].options.minimizer.options.compress;
    config.optimization.minimizer[0].options.minimizer.options.compress = Object.assign(optimizationCompress, {
      drop_console: true,
      drop_debugger: true
    });
    config.plugins.push(new CDNPlugin({
      modules: [{
        name: 'vue',
        var: 'Vue',
        path: 'dist/vue.runtime.min.js'
      }, {
        name:'vuex',
        var:'Vuex',
        path:'dist/vuex.min.js'
      },{
        name:'vue-router',
        var:'VueRouter',
        path:'dist/vue-router/min.js'
      }],
      publicPath: '/node_modules'
    }));
    config.plugins.push(new WebpackImageCompression({
      publicPath:'public/images'
    }));
  },
  chainWebpack: (config) => {
    config.plugin('extract-css').tap(arg => [{
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/[name].${timeStamp}.css`
    }]);
  },
  css: {
    extract: {
      ignoreOrder: true
    }
  },
  devServer: {
    client: {
      overlay: false
    }
  }
})
