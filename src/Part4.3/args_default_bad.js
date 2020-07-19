{
    function showTime(time) {
        if (time === undefined) {
            return '現在時刻：' + Date().toLocaleString();
        }
        else {
            return '現在時刻：' + time.toLocaleString();
        }
    }
    console.log(showTime());
    function showTime2(time) {
        if (time === undefined) {
            return '現在時刻：' + Date().toLocaleString();
        }
        else {
            return '現在時刻：' + time.toLocaleString();
        }
    }
    console.log(showTime2());
}
