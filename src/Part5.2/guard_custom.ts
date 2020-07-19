{
    class Book {
        isbn: string = 'isbn'
    }
    class Magazine {
        mcode: string = 'mcode'
    }

    function getInfo(): Book | Magazine {
        return new Magazine
        return new Book
    }

    function isBook(inf: Book | Magazine): inf is Book {
        return (inf as Book).isbn != undefined
    }

    let i = getInfo()
    if (isBook(i)) {
        console.log(i.isbn)
    } else {
        console.log(i.mcode);
    }
}