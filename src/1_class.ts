// 使用class关键字来定义一个类
/*
*   对象中主要包含了两个部分：
*       属性
*       方法
*/

class Person {
    /*
*   直接定义的属性是实例属性，需要通过对象的实例去访问：
*       const per = new Person();
*       per.name
*
*   使用static开头的属性是静态属性（类属性），可以直接通过类去访问
*       Person.age
*
*   readonly开头的属性表示一个只读的属性无法修改
*/

    /*
        定义实例属性（new出实例之后才能访问的属性）
    */
    // name: string = '孙悟空';
    // age:number = 18;

    /*
        定义静态属性：在属性前使用static关键字可以定义类属性（静态属性）
    */
    // static age: number = 18;

    /*
        readonly开头的属性表示一个只读的属性无法修改
    */
    // readonly name: string = '孙悟空';

    name: string = '孙悟空';
    age:number = 18;

    /*
    * 定义方法：如果方法以static开头则方法就是类方法，可以直接通过类去调用
    */
    // 实例方法
    sayHello(){
        console.log('Hello 大家好！');
    }

    // 类方法
    static sayHello(){
        console.log('Hello 大家好！');
    }
}

/* 创建实例 */
const per = new Person();

/* 属性 */

// 访问实例属性
console.log(per);
console.log(per.name, per.age);

// 访问静态(类)属性
// console.log(Person.age);

// 如果是readonly类型，则无法修改
// 下面的代码报错
// per.name = 'tom';

/* 方法 */

// 访问实例方法
per.sayHello();

// 访问静态方法
Person.sayHello();
