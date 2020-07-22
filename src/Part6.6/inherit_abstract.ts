{
    abstract class Figure {
        constructor(protected width: number, protected height: number) { }
        abstract get area(): number
    }

    class Triangle extends Figure {
        get area(): number {
            return this.width * this.height / 2
        }
    }

    let t = new Triangle(10, 5)
    console.log(t.area)
    console.log(t)
}