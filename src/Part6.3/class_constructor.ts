{
    class Person {
        constructor(private name: string, private age: number) { }
    }

    let p = new Person('田中', 55)
    console.log(p)
}
{
    class Person2 {
        constructor(public name: string, public age: number) { }
    }

    let p2 = new Person2('田中', 55)
    console.log(p2)
}