{
    function hoge(arg1: string, arg2?: boolean): string | number {
        return 'a'
    }

    type TypeP = Parameters<typeof hoge>
    let tp: TypeP = ['hoge', true]
    console.log(tp)
    console.log(typeof tp)

    type TypeR = ReturnType<typeof hoge>
    let tr: TypeR = hoge(...tp)
    console.log(tr)
    console.log(typeof tr)

    class MyClass {
        constructor(private arg1: string, private arg2: number) { }
    }
    type TypeC = ConstructorParameters<typeof MyClass>
    let tc: TypeC = ['fuga', 5]
    let mc: MyClass = new MyClass(...tc)
    console.log(mc)
    console.log(typeof mc)
}