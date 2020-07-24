{
    class MyCollection {
        static addAll<T>(data: T[], ...values: T[]): T[] {
            return data.concat(values)
        }
    }

    let x = [10, 15, 30]
    console.log(MyCollection.addAll(x, 35, 50))
}

{
    function add<T>(data: T[], ...values: T[]): T[] {
        return data.concat(values)
    }

    let x = [1, 2, 3]
    console.log(add<number>(x, 5, 7))
    // console.log(add<string>(x, 5, 7)) // Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
    // console.log(add(x, '5', '7')) // Argument of type '"5"' is not assignable to parameter of type 'number'.
}