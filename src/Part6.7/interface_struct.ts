{
    interface Figure {
        getArea(): number
    }

    class Triangle {
        constructor(private width: number, private height: number) { }
        getArea(): number {
            return this.width * this.height / 2
        }
    }

    let t: Figure = new Triangle(4, 5)
    console.log(t.getArea())
    console.log(t)
}