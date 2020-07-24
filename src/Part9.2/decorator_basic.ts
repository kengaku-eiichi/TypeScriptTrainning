{
    /**
     * 
     * @param target prptotype of caller class
     * @param key name of caller method
     * @param desc structured information of caller method
     * desc.value: body of method
     * desc.writable
     * desc.configurable
     * desc.enumerable
     */
    function log(target: any, key: string, desc: PropertyDescriptor) {
        let origin = desc.value
        desc.value = function () {
            console.log(`${key} start…`)
            let start = Date.now()
            let result = origin.apply(this, arguments)
            let end = Date.now()
            console.log(`${key} end…`)
            console.log(`Process Time ${end - start}msec.`)
            return result
        }
    }

    class MyClass {
        @log
        add(x: number, y: number): number {
            let s = Date.now()
            while (Date.now() - s < 4500);
            return x + y
        }
    }

    let mc = new MyClass
    console.log(mc.add(10, 20))
}