(function () {
    function showTime(time: Date = new Date()) {
        return '現在時刻：' + time.toLocaleString()
    }
    console.log(showTime())
})();
(function () {
    function showTime(time: Date = new Date()) {
        return `現在時刻：${time.toLocaleString()}`
    }
    console.log(showTime())
})()