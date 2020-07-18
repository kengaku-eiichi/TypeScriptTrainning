{
    var Sex = void 0;
    (function (Sex) {
        Sex[Sex["MALE"] = 1] = "MALE";
        Sex[Sex["FEMALE"] = 2] = "FEMALE";
        Sex[Sex["UNKNOWN"] = 4] = "UNKNOWN";
    })(Sex || (Sex = {}));
    console.log(Sex);
}
