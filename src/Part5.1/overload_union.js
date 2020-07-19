{
    function square(value) {
        if (value < 0) {
            return false;
        }
        else {
            return Math.sqrt(value);
        }
    }
    console.log(square(9));
    console.log(square(-9));
    function show(value) {
        switch (typeof value) {
            case "number":
                console.log(value.toFixed(0));
                break;
            case "boolean":
                console.log(value ? '真' : '偽');
                break;
        }
    }
    show(10.358);
    show(false);
    // show('ほげ')
}
