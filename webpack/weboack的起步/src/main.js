//使用common.js的模块化
const {add , mul} = require('./mathUtils.js')
console.log(add(30, 30));
console.log(mul(30, 30));


//使用es6的模块化
import { name,age,height } from './info.js';
console.log(name);
console.log(age);
console.log(height);
