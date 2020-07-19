{
    (function () {
        var _this = this;
        setInterval(function () { console.log("function: _this === this:", _this === this); }, 1000);
    })();
    (function () {
        var _this_1 = this;
        var _this = this;
        setInterval(function () { console.log("() => : _this = this:", _this === _this_1); }, 1000);
    })();
}
