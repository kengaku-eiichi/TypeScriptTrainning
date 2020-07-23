{
    function getProp(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 500 };
    console.log(getProp(p, 'name'));
    console.log(getProp(p, 'price'));
}
{
    function getProp2(obj, name) {
        return obj[name];
    }
    var p = { name: 'お弁当', price: 500 };
    console.log(getProp2(p, 'name'));
    console.log(getProp2(p, 'price'));
}
