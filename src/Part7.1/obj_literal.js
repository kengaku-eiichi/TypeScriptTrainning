{
    var lt = {
        type: '軽トラック',
        weight: 750
    };
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.hoge = function () {
            console.log('hoge called');
        };
        MyClass.prototype.foo = function () {
            console.log('foo called');
        };
        return MyClass;
    }());
    var x = new MyClass;
    x.hoge();
    x.foo();
}
