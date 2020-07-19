{
    (function () {
        let _this = this
        setInterval(function () { console.log("function: _this === this:", _this === this) }, 1000)
    })();
    (function () {
        let _this = this
        setInterval(() => { console.log("() => : _this = this:", _this === this) }, 1000)
    })()
}