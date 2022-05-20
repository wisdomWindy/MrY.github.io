# web

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

pubilcPath：服务器访问目录 /dist/

outputDir：项目打包后的输出目录，相对于pubilcPath(publicPath/outputDir) ../dist/

assetsDir：相对于outputDir(outputDir/assetsDir) ./

indexPath是相对于outputDir的（outputDir/filename） ../index.html

#### 开发环境

引用图片路径：./images/：访问的本就是/dist/因此不需要添加./dist

#### 生产环境

引用图片路径:./dist/images/：因为publicPath是/dist/但是在服务器中访问的是/，因此需要添加dist


把图片引用路径统一为./dist/images：配置需要怎么配置
静态资源需要在dist目录下
publicpath应该是/
