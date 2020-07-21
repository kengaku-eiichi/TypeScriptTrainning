{
    class Person {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        show(): string {
            return `${this.name}は${this.age}です。`
        }
    }

    let p = new Person('理央', 30)
    console.log(p.show())
}