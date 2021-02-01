const path = require('path')
module.exports = {
  /* 
    部署生产环境和开发环境下的URL：可对当前环境进行区分
    部署应用时的基本 URL
    如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
    例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置publicPath为/my-app/
   */
  /* publicPath: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的) 目录 */
  assetsDir: 'static',
  /* 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径 */
  indexPath: '/',
  /* 在multi-page模式下构建应用。每个“page”应该有一个对应的JavaScript 入口文件 */
  pages: {
    index: {
      entry: 'src/main.js', // page 的入口 必须选项
      template: 'public/index.html', // 模板文件来源 可选
      filename: 'index.html', // 在 dist/index.html 的输出  可选
      title: 'vuedemo', // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title> 可选
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含, 提取出来的通用 chunk 和 vendor chunk。 可选
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 
    代码保存时进行eslint检测 
    是否在保存的时候使用 `eslint-loader` 进行检查。
    是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  */
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的Vue构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。通过这个选项可以显式转译一个依赖。
  // Babel 显式转译列表
  transpileDependencies: [
    /* string or regex */
  ],
  // 调整内部的 webpack 配置。
  // 查阅 https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  },
  // 对内部的webpack配置（比如修改、增加Loader选项）(链式操作)。
  chainWebpack: () => {},
  // CSS 相关选项
  css: {
    // 当为true时,css文件名可省略 module 默认为 false
    requireModuleExtension: false,
    // 是否将组件中的CSS提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是,true,开发环境下是 false
    extract: false,
    // 是否为CSS开启source map。设置为true之后可能会影响构建的性能
    sourceMap: false,
    //向CSS相关的loader传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {}
  },
  /* webpack-dev-server 相关配置 */
  devServer: {
    open: true /* 自动打开浏览器 */,
    host: '0.0.0.0' /* 设置为0.0.0.0则所有的地址均能访问 */,
    port: 8066,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://47.100.47.3/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  },
  // 传递给 PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {},
  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
