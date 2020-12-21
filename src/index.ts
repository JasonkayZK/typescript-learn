// 需要在webpack.config.js中配置resolve属性
// 告诉webpack以.ts结尾的文件可以被认为是一个模块
import {hi} from './m1';

console.log(hi);

function sum(a: number, b: number):number{
    return  a + b;
}

console.log(sum(123, 456));

// 如果配置babel时，不指定版本运行环境，生成的不变
// 而如果指定了IE 11，则const会被代替为var(IE 11不支持ES6！)
const obj = {name:"孙悟空", age:33};
console.log(obj);

obj.age = 18;
console.log(obj);

// 使用ES6中的Promise
console.log(Promise);

// 使用ES6中的箭头函数
let fn = (a: number, b: number) => a + b;
fn(123 , 456);
fn(77, 22);
