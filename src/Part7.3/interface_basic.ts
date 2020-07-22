{
    interface Person {
        name: string
        age: number
    }

    function greet(p: Person): void {
        console.log(`こんにちは、${p.name}さん！`)
    }

    let p1 = {
        name: 'サクラ',
        age: 2,
        gender: 'female'
    }

    greet(p1)

    greet({
        name: 'ラン',
        age: 5,
        // gender: 'female'//not assignable to parameter of type 'Person'.
    })

    let p2: Person = {
        name: '椿',
        age: 7,
        gender: 'female'
    } as Person
    greet(p2)
}

{
    interface Person {
        name: string
        age: number
        [key: string]: any
    }

    function greet(p: Person): void {
        console.log(`こんにちは、${p.name}さん！`)
    }

    let p1 = {
        name: 'サクラ',
        age: 2,
        gender: 'female'
    }

    greet(p1)

    greet({
        name: 'ラン',
        age: 5,
        gender: 'female'
    })

    let p2: Person = {
        name: '椿',
        age: 7,
        gender: 'female'
    }
    greet(p2)
}
