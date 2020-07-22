{
    class Person {
        private _age!: number
        get age(): number {
            return this._age
        }
        set age(value: number) {
            if (value < 0) {
                throw new RangeError('ageは整数を指定してください。')
            }
            this._age = value
        }
    }

    let p = new Person
    p.age = 10
    console.log(p.age)
    console.log(p)
}