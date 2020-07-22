{
    interface Person {
        readonly name: string
        age?: number
    }

    let p: Person = {
        name: '田中太郎'
    }
    // p.name = '鈴木次郎'

    console.log(p)
}