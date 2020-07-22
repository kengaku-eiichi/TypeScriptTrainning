{
    interface Figure {
        getArea(): number
    }

    class Triangle implements Figure {
        constructor(private width: number, private height: number) { }
        getArea(): number {
            return this.width * this.height / 2
        }
    }

    let t = new Triangle(3, 4)
    console.log(t.getArea())
    console.log(t)
}