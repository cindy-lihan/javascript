const path = require('path')

module.export = {
  entry: './src/main.js',
  output: {
    // 绝对路径
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  }
}