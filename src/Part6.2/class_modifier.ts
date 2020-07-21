{
    class Person {
        private name: string
        private age: string
        constructor(name: string, age: string) {
            this.name = name
            this.age = age
        }
        public show(): string {
            return `${this.name}は${this.age}歳です。`
        }
    }
    let p = new Person('太郎', '13')
    console.log(p.show())
    // console.log(p.name)
}