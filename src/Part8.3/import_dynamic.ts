{
    import('./App').then(App => {
        App.showMessage()
        console.log(App.Util.getVersion())
    })
}

{
    (async function () {
        let App = await import('./App')
        App.showMessage()
        console.log(App.Util.getVersion())
    })()
}