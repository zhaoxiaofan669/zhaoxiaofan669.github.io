/**
 * Created by zxf111 on 2017/3/29.
 */
//这个文件是webpack的默认配置文件,m默认的名称为： webpack.config.js
//将来只需要再cmd面板上执行 webpack就会自动去查找webpack.config.js中内容进行相关打包

module.exports = {
  entry:'./main.js',     //webpack要打包的源文件是main.js
  output:{
     filename:'./build2.js' //打包以后输出的文件名称  ./bulid.js代表当前目录下
  }
};