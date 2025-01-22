const filterValues = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        if (fn(v, k, Object.entries(obj))) {
            res[k] = v
        }
    }
    return res
}

const mapValues = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        res[k] = fn(v, k, Object.entries(obj))
    }
    return res
}

const reduceValues = (obj, fn, initialVal = 0) => {
    let acc = initialVal
    for (const [k, v] of Object.entries(obj)) {
        acc = fn(acc, v, k, Object.entries(obj))
    }
    return acc
}
