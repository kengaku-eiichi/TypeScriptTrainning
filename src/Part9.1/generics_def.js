"use strict";
{
    var MyGenerics = /** @class */ (function () {
        function MyGenerics() {
        }
        MyGenerics.prototype.getValue = function () {
            return this.value;
        };
        return MyGenerics;
    }());
    var g = new MyGenerics();
    // g.value = 1 // Type '1' is not assignable to type 'string'.
    g.value = 'a';
    console.log(g);
}
