const ionOut = (str) => {
    const matches = [...str.matchAll(/\w+(?=tion)/g)]
    let res = []
    for (let i = 0; i < matches.length; i++) {
        res.push(matches[i][0] + "t")
    }
    return res
}
