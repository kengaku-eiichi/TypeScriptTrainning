{
    function sum(...values: number[]) {
        let result = 0
        for (let value of values) {
            result += value
        }
        return result
    }

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
}