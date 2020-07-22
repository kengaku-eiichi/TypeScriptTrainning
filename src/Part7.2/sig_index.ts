{
    interface NumberAssoc {
        [index: string]: number
    }
    let list: NumberAssoc = {
        'hundred': 100,
        'thounsand': 1000
    }

    console.log(list)
}