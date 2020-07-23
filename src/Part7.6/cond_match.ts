{
    type Returned<T> = T extends (...args: any[]) => infer R ? R : T

    function add(a: number, b: number): number {
        return a + b
    }
    let r1: Returned<typeof add> = add(1, 4)
    console.log(r1)
    console.log(typeof r1)

    function multiply(a: number, b: number) {
        return a * b
    }
    let r2: Returned<typeof multiply> = multiply(2, 5)
    console.log(r2)
    console.log(typeof r2)

    class Product {
        constructor(private name: string, private price: number) { }
    }
    let r3: Returned<Product> = new Product('ガリガリ君<パイン>', 50)
    console.log(r3)
    console.log(typeof r3)
}
