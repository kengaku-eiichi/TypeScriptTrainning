{
    interface Hoge {
        x: number
        y: number
    }

    interface Foo {
        x: number
    }

    let func1: (obj: Hoge) => void = (x: Foo) => { }
    // let func2: (obj: Foo) => void = (x: Hoge) => { } // コンパイルエラー

    let func3: (str: string) => void = (x: string) => { }
    let func4: (str: string, flag: boolean) => void = func3
}