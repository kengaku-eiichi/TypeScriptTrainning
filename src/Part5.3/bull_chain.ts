{
    let hoge: string | null | undefined;
    let result = (hoge === null || hoge === undefined) ? undefined : hoge.trim()
}
{
    let hoge: string | null | undefined;
    let result = hoge?.trim()
}