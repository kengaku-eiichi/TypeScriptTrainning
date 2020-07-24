{
    class MyGenerics<T>{
        value!: T
        getValue(): T {
            return this.value
        }
    }

    let g = new MyGenerics<string>()
    // g.value = 1 // Type '1' is not assignable to type 'string'.
    g.value = 'a'
    console.log(g)
}