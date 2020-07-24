"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    /**
     *
     * @param target prptotype of caller class
     * @param key name of caller method
     * @param desc structured information of caller method
     * desc.value: body of method
     * desc.writable
     * desc.configurable
     * desc.enumerable
     */
    function log(target, key, desc) {
        let origin = desc.value;
        desc.value = function () {
            console.log(`${key} start…`);
            let start = Date.now();
            let result = origin.apply(this, arguments);
            let end = Date.now();
            console.log(`${key} end…`);
            console.log(`Process Time ${end - start}msec.`);
            return result;
        };
    }
    class MyClass {
        add(x, y) {
            let s = Date.now();
            while (Date.now() - s < 4500)
                ;
            return x + y;
        }
    }
    __decorate([
        log
    ], MyClass.prototype, "add", null);
    let mc = new MyClass;
    console.log(mc.add(10, 20));
}
