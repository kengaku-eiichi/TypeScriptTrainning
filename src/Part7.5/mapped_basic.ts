{
    interface Product {
        name: string
        price: number
    }

    type ReadonlyProduct = {
        readonly [K in keyof Product]: Product[K]
    }
    type OptionalProduct = {
        [K in keyof Product]?: Product[K]
    }
}