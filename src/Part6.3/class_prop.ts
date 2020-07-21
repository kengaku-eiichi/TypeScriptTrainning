{
    class Person {
        name: string
        age: number
        constructor(name: string) {
            this.name = name
        }
    }

    let p = new Person('鈴木')
    p.age = 50
}
{
    class Person {
        name: string
        age!: number
        constructor(name: string) {
            this.name = name
        }
    }

    let p = new Person('鈴木')
    p.age = 50
}