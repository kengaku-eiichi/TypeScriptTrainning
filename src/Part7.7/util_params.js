"use strict";
{
    function hoge(arg1, arg2) {
        return 'a';
    }
    let tp = ['hoge', true];
    console.log(tp);
    console.log(typeof tp);
    let tr = hoge(...tp);
    console.log(tr);
    console.log(typeof tr);
    class MyClass {
        constructor(arg1, arg2) {
            this.arg1 = arg1;
            this.arg2 = arg2;
        }
    }
    let tc = ['fuga', 5];
    let mc = new MyClass(...tc);
    console.log(mc);
    console.log(typeof mc);
}
