"use strict";
{
    var Triangle = /** @class */ (function () {
        function Triangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Triangle.prototype.getArea = function () {
            return this.width * this.height / 2;
        };
        return Triangle;
    }());
    var t = new Triangle(4, 5);
    console.log(t.getArea());
    console.log(t);
}
