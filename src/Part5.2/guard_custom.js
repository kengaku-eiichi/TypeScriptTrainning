{
    var Book_1 = /** @class */ (function () {
        function Book() {
            this.isbn = 'isbn';
        }
        return Book;
    }());
    var Magazine_1 = /** @class */ (function () {
        function Magazine() {
            this.mcode = 'mcode';
        }
        return Magazine;
    }());
    function getInfo() {
        return new Magazine_1;
        return new Book_1;
    }
    function isBook(inf) {
        return inf.isbn != undefined;
    }
    var i = getInfo();
    if (isBook(i)) {
        console.log(i.isbn);
    }
    else {
        console.log(i.mcode);
    }
}
