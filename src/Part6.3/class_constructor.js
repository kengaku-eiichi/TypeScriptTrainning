"use strict";
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var p = new Person('田中', 55);
    console.log(p);
}
{
    var Person2 = /** @class */ (function () {
        function Person2(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person2;
    }());
    var p2 = new Person2('田中', 55);
    console.log(p2);
}
