"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.show = function () {
            return this.name + "\u306F" + this.age + "\u6B73\u3067\u3059\u3002";
        };
        return Person;
    }());
    var BusinessPerson = /** @class */ (function (_super) {
        __extends(BusinessPerson, _super);
        function BusinessPerson() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BusinessPerson.prototype.work = function () {
            return this.name + "\u306F\u50CD\u304D\u307E\u3059\u3002";
        };
        return BusinessPerson;
    }(Person));
    var bp = new BusinessPerson('斉藤', 48);
    console.log(bp.show());
    console.log(bp.work());
    console.log(bp);
}
