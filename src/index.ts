// 需要在webpack.config.js中配置resolve属性
// 告诉webpack以.ts结尾的文件可以被认为是一个模块
import {hi} from './m1';

console.log(hi);

function sum(a: number, b: number):number{
    return  a + b;
}

console.log(sum(123, 456));
