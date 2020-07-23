{
    interface Product {
        name: string
        price: number
    }

    type ProductName = Product['name']
    type ProductNameOrPrice = Product['name' | 'price']
    // type HogeType = Product['hoge'] // Property 'hoge' does not exist on type 'Product'.
}