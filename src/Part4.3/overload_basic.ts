{
    function show(value: number): void
    function show(value: boolean): void
    function show(value: any): void {
        switch (typeof value) {
            case "number":
                console.log(value.toFixed(0))
                break
            case "boolean":
                console.log(value ? '真' : '偽')
                break
        }
    }

    show(10.358)
    show(false)
    // show('ほげ')
}