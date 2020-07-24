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
        function MyGenerics() {
        }
        MyGenerics.prototype.getValue = function () {
            return this.value;
        };
        return MyGenerics;
    }());
    console.log(Hoge);
    // let gn = new MyGenerics<number>() // ype 'number' does not satisfy the constraint 'Hoge'.
    // gn.value = 1
    // console.log(gn)
    // let gs = new MyGenerics<string>() // Type 'string' does not satisfy the constraint 'Hoge'.
    // gs.value = 'x'
    // console.log(gs)
    var gh = new MyGenerics();
    // gh1.value = 1 // Type '1' is not assignable to type 'Hoge'.
    gh.value = new Hoge;
    console.log(gh);
    var gf = new MyGenerics();
    // gf.value = 'b' // Type '"b"' is not assignable to type 'Foo'.
    gf.value = new Foo;
    console.log(gf);
    // let gb = new MyGenerics<Bar>() // Type 'Bar' does not satisfy the constraint 'Hoge'.
    //     gb.value = new Bar
    //     console.log(gb)
}
