# web

[![pages-build-deployment](https://github.com/wisdomWindy/wisdomWindy.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/wisdomWindy/wisdomWindy.github.io/actions/workflows/pages/pages-build-deployment)
[访问网址](https://wisdomwindy.github.io/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 部署

pubilcPath：打包后的访问目录，文件的访问前缀与outputDir无关，只与服务器的部署目录有关。对于没有经过处理的图片不适用，默认是/

outputDir：项目打包后的输出目录，默认是docs

assetsDir：相对于outputDir(outputDir/assetsDir)

indexPath是相对于outputDir的（outputDir/filename），默认是index.html

#### 开发环境

引用图片路径：./images/：docs目录作为根目录，因此不需要添加./docs

#### 生产环境

引用图片路径:/images/：因为publicPath是/但是在服务器中访问的是/，因此不需要添加dist


把图片引用路径统一为/images：配置需要怎么配置
静态资源需要在dist目录下
publicpath应该是/
