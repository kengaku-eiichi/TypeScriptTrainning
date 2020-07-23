namespace MainApp {
    export class Hoge { }
    export function foo() {
        console.log('foo called.')
    }
}

let mah = new MainApp.Hoge
console.log(mah)

MainApp.foo()
