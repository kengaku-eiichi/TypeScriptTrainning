"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data;
{
    class MyClass {
        constructor() {
            _data.set(this, 10);
        }
        show() {
            console.log(`値は${__classPrivateFieldGet(this, _data)}です。`);
        }
    }
    _data = new WeakMap();
    let c = new MyClass;
    c.show();
    // console.log(c.data)
}
