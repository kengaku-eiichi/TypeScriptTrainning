{
    type Intersection<T, U> = T extends U ? T : never
    type CommonType = Intersection<string | boolean | number, boolean | string[] | string>

    let c1: CommonType = '1'
    let c2: CommonType = true
    // let c3: CommonType = 1 // Type '1' is not assignable to type 'string | boolean'.
    // let c4: CommonType = ['1', '2'] // Type 'string[]' is not assignable to type 'string | boolean'.
}