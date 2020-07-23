{
    interface Book {
        isbn: string
        title: string
        price: number
        published: Date
    }

    type SubBook1 = Pick<Book, 'title' | 'price'>
    let sb1: SubBook1 = { title: 'book1', price: 20 }
    console.log(sb1)

    type SubBook2 = Omit<Book, 'isbn' | 'published'>
    let sb2: SubBook2 = { title: 'book2', price: 30 }
    console.log(sb2)
}