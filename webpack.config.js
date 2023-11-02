const path = require("path")
const MyPlugin = require("./plugins/plugin_demo")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin =  require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  // entry:{
  //   main:"./src/index.js", // 属性名：chunk的名称，属性值：入口模块（启动模块）
  //   main_test:"./src/index_test.js"
  // },
  output:{
    // path: path.resolve(__dirname, 'target'), // 必须配置一个绝对路径，表示资源放置的路径，默认是dist
    filename: '[name]_[hash:5].js', // 配置的是合并的js的文件规则
    // publicPath:'/'
  },
  module:{
    rules:[
      // {
      //   test: /index\.js$/, //匹配规则
      //   use: [  // 匹配到了之后，使用哪些加载器
      //     {
      //       loader:'./loaders/loader_demo.js',
      //       options:{
      //         changeVar:'未知数'
      //       }
      //     }
      //   ]
      // },//规则1
      {

        test:/\.(png|jpe?g|gif)$/i,
        use:[{
          loader:'file-loader',
          options: {
            outputPath: 'images',
          },
        }]
      },//规则2
      {
        test:/\.css$/i,
        use:['style-loader',{
          loader:'css-loader',
          options:{
            modules:true
          }
        }]
      },
      {
        test:/.less$/i,
        use:['style-loader','css-loader','less-loader']
      }
    ], //表示模块的匹配规则
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src")
    }
  },
  plugins:[
    // new MyPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
    })
  ],
  devServer:{
    open:"http://localhost:8080/",
    // proxy:{
    //   '/api': {
    //     target:"http://localhost:3000",
    //     changeOrigin:true
    //   },
    // }
  }
}


// 函数方式
// yarn webpack --env=mode=production
// yarn webpack --env=mode=development

// module.exports = function(env){
//   return {
//     mode: env.mode
//   }
// }