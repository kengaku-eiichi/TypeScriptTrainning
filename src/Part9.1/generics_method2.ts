{
    function merge<T, R>(arg1: T, arg2: R): R & T {
        let result: any = <T & R>{}
        for (let key in arg1) {
            (<any>result)[key] = arg1[key]
        }
        for (let key in arg2) {
            (<any>result)[key] = arg2[key]
        }
        return result
    }

    let book = {
        title: 'my book',
        price: 500,
        // toString: () => `${this.title} ${this.price}` // The reference of this in the arrow function is determined by the scope of the declaration
        toString() {
            return `${this.title} ${this.price}`
        }
    }
    let logger = {
        // debug: () => console.log(this.toString()) // The reference of this in the arrow function is determined by the scope of the declaration
        debug() { console.log(this.toString()) }
    }
    let m = merge(book, logger)
    m.debug()
}

{
    function merge2<T, R>(arg1: T, arg2: R): R & T {
        let result: any = {}
        for (let key in arg1) {
            result[key] = arg1[key]
        }
        for (let key in arg2) {
            result[key] = arg2[key]
        }
        return result
    }

    let book = {
        title: 'my book',
        price: 500,
        toString() {
            return `${this.title} ${this.price}`
        }
    }
    let logger = {
        debug() { console.log(this.toString()) }
    }
    let m = merge2(book, logger)
    m.debug()
}