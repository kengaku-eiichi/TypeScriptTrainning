(function () {
    function showTime(time) {
        if (time === void 0) { time = new Date(); }
        return '現在時刻：' + time.toLocaleString();
    }
    console.log(showTime());
})();
(function () {
    function showTime(time) {
        if (time === void 0) { time = new Date(); }
        return "\u73FE\u5728\u6642\u523B\uFF1A" + time.toLocaleString();
    }
    console.log(showTime());
})();
