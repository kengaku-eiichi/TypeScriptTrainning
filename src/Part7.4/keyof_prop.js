{
    function getProp1(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 600 };
    console.log(getProp1(p, 'name'));
    console.log(getProp1(p, 'price'));
    console.log(getProp1(p, 'hoge'));
}
{
    function getProp2(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 600 };
    console.log(getProp2(p, 'name'));
    console.log(getProp2(p, 'price'));
    // console.log(getProp2(p, 'hoge')) // is not assignable to parameter of type '"name" | "price"'.
}
