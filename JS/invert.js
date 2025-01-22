const invert = (obj) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        res[v] = k
    }
    return res
}
