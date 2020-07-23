{
    interface MyConfig {
        title: number
        debug: boolean
    }

    type OptionalMyConfig = Partial<MyConfig>

    let conf: OptionalMyConfig = {}
    console.log(conf)
}

{
    type MyConfig = Partial<{ title: number, debug: boolean }>

    let conf: MyConfig = {}
    conf.title = 3
    conf.debug = false
    console.log(conf)
}

{
    type MyConfig = Partial<{ title: number, debug: boolean }>
    type RequiredMyConfig = Required<MyConfig>
    // let conf: RequiredMyConfig = {} // missing the following properties from type 'Required<Partial<{ title: number; debug: boolean; }>>': title, debug
    let conf: RequiredMyConfig = { title: 1, debug: true }
    console.log(conf)
}