"use strict";
{
    function greet(p) {
        console.log(`こんにちは、${p.name}さん！`);
    }
    let p1 = {
        name: 'サクラ',
        age: 2,
        gender: 'female'
    };
    greet(p1);
    greet({
        name: 'ラン',
        age: 5,
    });
    let p2 = {
        name: '椿',
        age: 7,
        gender: 'female'
    };
    greet(p2);
}
{
    function greet(p) {
        console.log(`こんにちは、${p.name}さん！`);
    }
    let p1 = {
        name: 'サクラ',
        age: 2,
        gender: 'female'
    };
    greet(p1);
    greet({
        name: 'ラン',
        age: 5,
        gender: 'female'
    });
    let p2 = {
        name: '椿',
        age: 7,
        gender: 'female'
    };
    greet(p2);
}
