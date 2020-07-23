namespace Hoge.MainApp {
    export class Foo { }
    export function Bar() {
        console.log('Hoge.MainApp.Bar called.')
    }
}

console.log(Hoge.MainApp.Foo)
let f = new Hoge.MainApp.Foo
console.log(f)

console.log(Hoge.MainApp.Bar)
Hoge.MainApp.Bar()

namespace Hoge2 {
    export namespace MainApp2 {
        export class Foo { }
        export function Bar() {
            console.log('Hoge2.MainApp2.Bar called.')
        }
    }
}
console.log(Hoge2.MainApp2.Foo)
let f2 = new Hoge2.MainApp2.Foo
console.log(f2)

console.log(Hoge2.MainApp2.Bar)
Hoge2.MainApp2.Bar()
