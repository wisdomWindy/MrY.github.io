const { defineConfig } = require('@vue/cli-service');
const CDNPlugin = require('webpack-cdn-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
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
    config.externals = Object.assign(config.externals ||{},{
      'vue':'Vue',
      'vuex':'Vuex',
      "vue-router":'VueRouter'
    });
    let optimizationCompress = config.optimization.minimizer[0].options.minimizer.options.compress;
    config.optimization.minimizer[0].options.minimizer.options.compress = Object.assign(optimizationCompress, {
      drop_console: true,
      drop_debugger: true
    });
    config.plugins.push(new CDNPlugin({
      modules: [{
        name: 'vue',
        var: 'Vue',
        path: 'dist/vue.runtime.global.prod.js'
      }, {
        name: 'vuex',
        var: 'Vuex',
        path: 'dist/vuex.global.prod.js'
      }, {
        name: 'vue-router',
        var: 'VueRouter',
        path: 'dist/vue-router.global.prod.js'
      }],
      publicPath: '/node_modules'
    }));
    config.optimization.minimizer.push(new ImageMinimizerWebpackPlugin({
      minimizer: {
        implementation: ImageMinimizerWebpackPlugin.imageminMinify,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [{
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [
                            { xmlns: "http://www.w3.org/2000/svg" },
                          ],
                        },
                      },
                    },
                  },
                }]
              },
            ],
          ],
        }

      },
    }));
  },
  chainWebpack: (config) => {
    config.plugin('extract-css').tap(arg => [{
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/[name].${timeStamp}.css`
    }]);
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true, mozjpeg: {
          progressive: true,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      });
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
