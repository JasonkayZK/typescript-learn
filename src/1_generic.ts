/*
function fn(a: any): any{
    return a;
}
*/

/*
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
function fn<T>(a: T): T {
    return a;
}

/* I.可以直接调用具有泛型的函数 */
// 1.不指定泛型，TS可以自动对类型进行推断
let result = fn(10);
// 2.指定泛型
let result2 = fn<string>('hello');

/* II.泛型可以同时指定多个 */
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello');

/* III.限制泛型范围 */
interface Inter {
    length: number;
}

// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

fn3({length: 10});

/* Ⅳ.类中使用泛型 */
class MyClass<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');
