import {hi} from './m'

let a = 10;
// 这是一个注释
console.log(hi);
console.log(a);

// a = 'hello';

/* 在tsconfig.json中开启隐式any检查 */
// function fn(a, b){
//     return a + b;
// }

function fn(a: number, b: number) {
    return a + b;
}

/* 不允许不明确类型的this */
// 在JS中，函数的this和函数的调用方式相关：
// 非严格模式下，以函数形式调用时，this指的就是window
// 严格模式下，以函数形式调用时，this指的就是undefined
// 以方法形式调用，this指的就是这个对象
// function fnn() {
//     alert(this);
// }

function fn2(this: Window) {
    alert(this);
}

/* 严格的检查空值 */
let box1 = document.getElementById('box1');

// 下面的box1元素可能是不存在的，此时空指针报错！
// box1.addEventListener('click', function () {
//     alert('hello');
// });

// 解决方法1：
// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

// 解决方法2：
box1?.addEventListener('click', function () {
    alert('hello');
});
