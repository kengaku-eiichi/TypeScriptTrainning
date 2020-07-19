{
    let data: unknown = 10
    data = 'hoge'
    // console.log(data.trim())
    if (typeof data === 'string') {
        console.log(data.trim())
    }
    data = [true, false, true]

    let str: any = 'hoge'
    console.log(str.trim())
}