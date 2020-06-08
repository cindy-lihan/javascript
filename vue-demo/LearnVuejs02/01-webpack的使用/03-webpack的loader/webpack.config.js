const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    // 绝对路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
      test:/\.css$/,
      use: ['style-loader','css-loader']
    }
    ]
  }
}