var Hoge;
(function (Hoge) {
    var MainApp;
    (function (MainApp) {
        var Foo = /** @class */ (function () {
            function Foo() {
            }
            return Foo;
        }());
        MainApp.Foo = Foo;
        function Bar() {
            console.log('Hoge.MainApp.Bar called.');
        }
        MainApp.Bar = Bar;
    })(MainApp = Hoge.MainApp || (Hoge.MainApp = {}));
})(Hoge || (Hoge = {}));
console.log(Hoge.MainApp.Foo);
var f = new Hoge.MainApp.Foo;
console.log(f);
console.log(Hoge.MainApp.Bar);
Hoge.MainApp.Bar();
var Hoge2;
(function (Hoge2) {
    var MainApp2;
    (function (MainApp2) {
        var Foo = /** @class */ (function () {
            function Foo() {
            }
            return Foo;
        }());
        MainApp2.Foo = Foo;
        function Bar() {
            console.log('Hoge2.MainApp2.Bar called.');
        }
        MainApp2.Bar = Bar;
    })(MainApp2 = Hoge2.MainApp2 || (Hoge2.MainApp2 = {}));
})(Hoge2 || (Hoge2 = {}));
console.log(Hoge2.MainApp2.Foo);
var f2 = new Hoge2.MainApp2.Foo;
console.log(f2);
console.log(Hoge2.MainApp2.Bar);
Hoge2.MainApp2.Bar();
