var MainApp;
(function (MainApp) {
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    MainApp.Hoge = Hoge;
    function foo() {
        console.log('foo called.');
    }
    MainApp.foo = foo;
})(MainApp || (MainApp = {}));
var mah = new MainApp.Hoge;
console.log(mah);
MainApp.foo();
