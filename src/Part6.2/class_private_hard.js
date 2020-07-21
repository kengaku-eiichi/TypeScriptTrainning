"use strict";
var _data;
{
    class MyClass {
        constructor() {
            this.data = 10;
        }
    }
    let c = new MyClass();
    // console.log("c.data:", c.data)
    console.log("c['data']", c['data']);
    class MyClass2 {
        constructor() {
            _data.set(this, 10);
        }
    }
    _data = new WeakMap();
    let c2 = new MyClass2();
    // console.log("c2.data:", c2.data)
    console.log("c2['data']", c2['data']);
    // console.log("c2['#data']", c2['#data'])
}
