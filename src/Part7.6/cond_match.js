{
    function add(a, b) {
        return a + b;
    }
    var r1 = add(1, 4);
    console.log(r1);
    console.log(typeof r1);
    function multiply(a, b) {
        return a * b;
    }
    var r2 = multiply(2, 5);
    console.log(r2);
    console.log(typeof r2);
    var Product = /** @class */ (function () {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }
        return Product;
    }());
    var r3 = new Product('ガリガリ君<パイン>', 50);
    console.log(r3);
    console.log(typeof r3);
}
