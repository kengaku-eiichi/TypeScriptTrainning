{
    class Hoge { protected value: string }
    class Foo extends Hoge { }
    class Bar { protected value: boolean }
    class MyGenerics<T extends Hoge>{
        value!: T
        getValue(): T {
            return this.value
        }
    }

    // let gn = new MyGenerics<number>() // ype 'number' does not satisfy the constraint 'Hoge'.
    // gn.value = 1
    // console.log(gn)

    // let gs = new MyGenerics<string>() // Type 'string' does not satisfy the constraint 'Hoge'.
    // gs.value = 'x'
    // console.log(gs)

    let gh = new MyGenerics<Hoge>()
    // gh1.value = 1 // Type '1' is not assignable to type 'Hoge'.
    gh.value = new Hoge
    console.log(gh)

    let gf = new MyGenerics<Foo>()
    // gf.value = 'b' // Type '"b"' is not assignable to type 'Foo'.
    gf.value = new Foo
    console.log(gf)

    // let gb = new MyGenerics<Bar>() // Type 'Bar' does not satisfy the constraint 'Hoge'.
    //     gb.value = new Bar
    //     console.log(gb)
}