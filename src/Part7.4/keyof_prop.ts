{
    function getProp1(obj: any, name: string) {
        return obj[name]
    }

    let p = { name: 'お弁当', price: 600 }
    console.log(getProp1(p, 'name'))
    console.log(getProp1(p, 'price'))
    console.log(getProp1(p, 'hoge'))
}

{
    interface Product {
        name: string
        price: number
    }
    function getProp2(obj: Product, name: keyof Product) {
        return obj[name]
    }

    let p = { name: 'お弁当', price: 600 }
    console.log(getProp2(p, 'name'))
    console.log(getProp2(p, 'price'))
    // console.log(getProp2(p, 'hoge')) // Argument of type '"hoge"' is not assignable to parameter of type '"name" | "price"'.
}
