// (function () {
//     function process(value: string | number) {
//         return value.toUpperCase()
//     }
// })();

(function () {
    function process(value: string | number) {
        if (typeof value === 'string') {
            return value.toUpperCase()
        } else {
            return value.toFixed(1)
        }
    }

    console.log(process("abc"))
    console.log(process(123.456))
})()
