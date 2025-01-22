const groupPrice = (str) => {
    const regxp = new RegExp(/(?:USD|\$)(\d+).(\d+)/g)
    let res = []
    const matches = [...str.matchAll(regxp)]
    for (let i = 0; i < matches.length; i++) {
        res.push([matches[i][0], matches[i][1], matches[i][2]])
    }
    return res
}
