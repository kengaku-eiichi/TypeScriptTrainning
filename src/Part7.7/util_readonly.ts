{
    interface Article {
        url: string
    }

    let a: Readonly<Article> = { url: 'https://wings.msn.to' }
    // a.url = 'google.com' // Cannot assign to 'url' because it is a read-only property.
}