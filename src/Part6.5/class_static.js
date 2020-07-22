{
    var Figure = /** @class */ (function () {
        function Figure() {
        }
        Figure.circle = function (radius) {
            return radius * radius * this.PI;
        };
        Figure.PI = 3.14159;
        return Figure;
    }());
    console.log(Figure.PI);
    console.log(Figure.circle(5));
    console.log(Figure);
}
