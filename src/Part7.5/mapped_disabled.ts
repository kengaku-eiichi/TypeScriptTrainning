{
    type ReadonlyProduct = {
        readonly name: string
        readonly price: number
    }
    type Product = {
        -readonly [K in keyof ReadonlyProduct]: ReadonlyProduct[K]
    }
}

{
    type OptionalProduct = {
        name?: string
        price?: number
    }
    type Product = {
        [K in keyof OptionalProduct]-?: OptionalProduct[K]
    }
}