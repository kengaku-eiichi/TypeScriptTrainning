"use strict";
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        show() {
            return `${this.name}は${this.age}歳です。`;
        }
    }
    let p = new Person('太郎', '13');
    console.log(p.show());
    // console.log(p.name)
}
