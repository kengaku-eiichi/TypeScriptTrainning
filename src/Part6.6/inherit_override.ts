{
    class Person {
        constructor(protected name: string, protected age: number) { }
        show(): string {
            return `${this.name}は${this.age}歳です。`
        }
    }

    class BusinessPerson extends Person {
        constructor(name: string, age: number, protected clazz: string) {
            super(name, age)
        }
        show(): string {
            return super.show() + `${this.clazz}です。`
        }
    }

    let bp = new BusinessPerson('小林', 28, '主任')
    console.log(bp.show())
    console.log(bp)
}