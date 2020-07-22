{
    interface Calculate {
        add(x: number, y: number): number
        multiply: (x: number, y: number) => number
    }

    let obj: Calculate = {
        add(a: number, b: number) {
            return a + b
        },
        multiply(a: number, b: number) {
            return a * b
        }
    }

    console.log(obj.add(1, 2))
    console.log(obj.multiply(3, 4))
}