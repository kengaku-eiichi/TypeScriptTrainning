{
    function merge(arg1, arg2) {
        var result = {};
        for (var key in arg1) {
            result[key] = arg1[key];
        }
        for (var key in arg2) {
            result[key] = arg2[key];
        }
        return result;
    }
    var book = {
        title: 'my book',
        price: 500,
        // toString: () => `${this.title} ${this.price}` // The reference of this in the arrow function is determined by the scope of the declaration
        toString: function () {
            return this.title + " " + this.price;
        }
    };
    var logger = {
        // debug: () => console.log(this.toString()) // The reference of this in the arrow function is determined by the scope of the declaration
        debug: function () { console.log(this.toString()); }
    };
    var m = merge(book, logger);
    m.debug();
}
{
    function merge2(arg1, arg2) {
        var result = {};
        for (var key in arg1) {
            result[key] = arg1[key];
        }
        for (var key in arg2) {
            result[key] = arg2[key];
        }
        return result;
    }
    var book = {
        title: 'my book',
        price: 500,
        toString: function () {
            return this.title + " " + this.price;
        }
    };
    var logger = {
        debug: function () { console.log(this.toString()); }
    };
    var m = merge2(book, logger);
    m.debug();
}
