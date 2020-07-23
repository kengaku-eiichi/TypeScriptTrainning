"use strict";
{
    // let t2: T2 = true // Type 'true' is not assignable to type 'number'.
    let t2 = 1;
    // let t3: T3 = '2' // Type '"2"' is not assignable to type 'number | boolean'.
    let t3 = true;
    // let t4: T4 = {} // Type '{}' is not assignable to type 'string'.
    let t4 = 'hoge';
    // let t5: T5 = 1 // Type '1' is not assignable to type 'string | boolean'.
    let t5 = 'hoge';
    // let t6: T6 = {} // Type '{}' is not assignable to type 'string'.
    let t6 = 'hoge';
    // let t8: T8 = null // Type 'null' is not assignable to type 'string | number'.
    let t8;
    // let t10: T10 = null // Type 'null' is not assignable to type 'string.
    let t10;
    // console.log(t10) // Variable 't10' is used before being assigned.
}
