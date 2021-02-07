const path = require('path');

module.exports = {
  // 配置别名
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@comp/': path.resolve(__dirname, './src/components'),
  },

  // 端口，默认3000
  port: '8081',

  // 是否自动在浏览器打开
  open: true,

  // 配置部署基础路径
  base: 'admin',

  




  // 引用全局 scss
//   cssPreprocessOptions: {
//     scss: {
//       additionalData: `
//         @import "./src/styles/_var.scss";
//         @import "./src/styles/_mix.scss";
//       `
//     }
//   },


  // 为开发服务器配置自定义代理规则
  // proxy: {
  //   '/api': {
  //     target: 'http://10.110.52.28:8081',
  //     changeOrigin: true,
  //     secure: false,
  //   }
  // }
}