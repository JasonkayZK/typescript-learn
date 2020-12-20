/* 1.变量类型声明和初始化 */
var a;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
var b;
b = 'hello';
// b = 123;
// 声明变量的同时直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = false;
c = true;
/* 2.函数声明 */
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"
function sum(a, b) {
    return a + b;
}
var res = sum(123, 345);
// let res = sum(123, '456'); // 报错
/* 3.字面量声明 */
// 下面的语句相当于定义了一个a3常量；
var a3;
// a3 = 11; // 尝试将a3赋值为11，报错；
/* 4.联合类型 */
var b4;
b4 = "male";
b4 = "female";
var c4;
c4 = true;
c4 = 'hello';
/* 5.组合类型 */
// &表示同时满足的类型
var a5;
a5 = { name: 'haha', age: 18 };
/* 6.常见基本类型类型 */
/* 6.1 Any */
// any 表示的是任意类型，一个变量设置类型为any后相当于：对该变量关闭了TS的类型检测！
// 使用TS时，强烈不建议使用any类型
// let d: any;
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
var a61;
a61 = 10;
a61 = 'hello';
a61 = true;
/* 6.2 Unknown */
var a62;
a62 = 10;
a62 = 'hello';
a62 = true;
/* 6.2.2 Unknown和Any对比 */
var s = 'hello';
// a61的类型是any，它可以赋值给任意变量
// any赋值给其他变量时，TS也会同时关闭对那个赋值变量的类型检查！
s = a61;
// a62的类型是unknown，它不能赋值给一个确定类型！
// s = a62;
// 即：unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof a62 === "string") {
    s = a62;
}
/* 6.2.3 类型断言 */
// 类型断言，用来帮助编译器判断变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
s = a62;
s = a62;
/* 6.3 void */
// void 用来表示空，主要用于函数中
// 以函数为例，表示没有返回值的函数：
function fn() {
}
/* 6.4 undefined */
// never 表示永远不会返回结果（连undefined都没有）[较少使用]
// 下面的函数没有返回值（连undefined都没有），仅抛出error
function fn2() {
    throw new Error('报错了！');
}
/* 6.5 undefined */
