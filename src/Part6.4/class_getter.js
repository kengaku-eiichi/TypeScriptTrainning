"use strict";
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value < 0) {
                    throw new RangeError('ageは整数を指定してください。');
                }
                this._age = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person;
    p.age = 10;
    console.log(p.age);
    console.log(p);
}
