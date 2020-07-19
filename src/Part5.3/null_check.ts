{
    let hoge: string | null | undefined
    console.log((hoge !== null && hoge !== undefined) ? hoge : 'x')
    console.log(hoge ?? 'x')
    console.log(hoge?.length ?? 0)
}