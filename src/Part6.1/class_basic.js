{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.show = function () {
            return this.name + "\u306F" + this.age + "\u3067\u3059\u3002";
        };
        return Person;
    }());
    var p = new Person('理央', 30);
    console.log(p.show());
}
