{
    class Hoge { protected value: string }
    class Foo extends Hoge { protected value2: string }
    class Bar { protected value: boolean }
    class MyGenerics<T extends Hoge>{
        constructor(private value: T) { }
    }

    // let gn = new MyGenerics<number>(1) // Type 'number' does not satisfy the constraint 'Hoge'.
    // console.log(gn)

    let gh = new MyGenerics<Hoge>(new Hoge)
    console.log(gh)

    let gf = new MyGenerics<Foo>(new Foo)
    console.log(gf)

    // let gb = new MyGenerics<Bar>(new Bar) // Type 'Bar' does not satisfy the constraint 'Hoge'.
    // console.log(gb)
}
