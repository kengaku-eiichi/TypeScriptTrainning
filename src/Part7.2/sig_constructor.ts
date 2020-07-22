{
    interface Figure {
        new(width: number, height: number): Triangle
    }

    class Triangle {
        constructor(private width: number, private height: number) { }
    }

    let t: Figure = Triangle
    console.log(t)
}