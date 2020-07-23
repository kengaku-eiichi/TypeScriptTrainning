"use strict";
{
    let conf = {};
    console.log(conf);
}
{
    let conf = {};
    conf.title = 3;
    conf.debug = false;
    console.log(conf);
}
{
    // let conf: RequiredMyConfig = {} // missing the following properties from type 'Required<Partial<{ title: number; debug: boolean; }>>': title, debug
    let conf = { title: 1, debug: true };
    console.log(conf);
}
