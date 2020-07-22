{
    class Person {
        constructor(protected name: string, protected age: number) { }
        show(): string {
            return `${this.name}は${this.age}歳です。`
        }
    }
    class BusinessPerson extends Person {
        work(): string {
            return `${this.name}は働きます。`
        }
    }

    let bp = new BusinessPerson('斉藤', 48)
    console.log(bp.show())
    console.log(bp.work())
    console.log(bp)
}