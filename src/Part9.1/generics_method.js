{
    var MyCollection = /** @class */ (function () {
        function MyCollection() {
        }
        MyCollection.addAll = function (data) {
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            return data.concat(values);
        };
        return MyCollection;
    }());
    var x = [10, 15, 30];
    console.log(MyCollection.addAll(x, 35, 50));
}
{
    function add(data) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return data.concat(values);
    }
    var x = [1, 2, 3];
    console.log(add(x, 5, 7));
    // console.log(add<string>(x, 5, 7)) // Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
    console.log(add(x, '5', '7'));
}
