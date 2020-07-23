{
    type T1 = string | number | boolean

    type T2 = Exclude<T1, string | boolean>
    // let t2: T2 = true // Type 'true' is not assignable to type 'number'.
    let t2: T2 = 1

    type T3 = Exclude<T1, string>
    // let t3: T3 = '2' // Type '"2"' is not assignable to type 'number | boolean'.
    let t3: T3 = true

    type T4 = Extract<T1, string | object>
    // let t4: T4 = {} // Type '{}' is not assignable to type 'string'.
    let t4: T4 = 'hoge'

    type T5 = Extract<T1, string | boolean>
    // let t5: T5 = 1 // Type '1' is not assignable to type 'string | boolean'.
    let t5: T5 = 'hoge'

    type T6 = Extract<T4, T5>
    // let t6: T6 = {} // Type '{}' is not assignable to type 'string'.
    let t6: T6 = 'hoge'

    type T7 = string | number | undefined
    type T8 = NonNullable<T7>
    // let t8: T8 = null // Type 'null' is not assignable to type 'string | number'.
    let t8: T8
    // console.log(t8) // Variable 't8' is used before being assigned.

    type T9 = string | null | undefined
    type T10 = NonNullable<T9>
    // let t10: T10 = null // Type 'null' is not assignable to type 'string.
    let t10: T10
    // console.log(t10) // Variable 't10' is used before being assigned.
}