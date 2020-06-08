// 1.使用CommandJS的模块化的规范
const {add, mul} = require('./mathUtils.js')
console.log(add(1,5))
console.log(mul(3,5))

// 2.使用ES6的模块化的规范
import {name, age} from './info'
console.log(name)
console.log(age)

//3.依赖css文件
require('../css/normal.css')
