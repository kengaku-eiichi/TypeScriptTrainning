{
    let lt: {
        type: string
        weight: number
    } = {
        type: '軽トラック',
        weight: 750
    }

    class MyClass {
        hoge() {
            console.log('hoge called')
        }
        foo() {
            console.log('foo called')
        }
    }

    let x: { hoge() } = new MyClass
    x.hoge()
    // x.foo()
}