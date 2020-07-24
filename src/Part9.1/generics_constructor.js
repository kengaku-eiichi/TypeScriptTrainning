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
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    var Foo = /** @class */ (function (_super) {
        __extends(Foo, _super);
        function Foo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Foo;
    }(Hoge));
    var Bar = /** @class */ (function () {
        function Bar() {
        }
        return Bar;
    }());
    var MyGenerics = /** @class */ (function () {
        function MyGenerics(value) {
            this.value = value;
        }
        return MyGenerics;
    }());
    // let gn = new MyGenerics<number>(1) // Type 'number' does not satisfy the constraint 'Hoge'.
    // console.log(gn)
    var gh = new MyGenerics(new Hoge);
    console.log(gh);
    var gf = new MyGenerics(new Foo);
    console.log(gf);
    // let gb = new MyGenerics<Bar>(new Bar) // Type 'Bar' does not satisfy the constraint 'Hoge'.
    // console.log(gb)
}
