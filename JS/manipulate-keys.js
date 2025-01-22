const filterKeys = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        if (fn(k)) {
            res[k] = v
        }
    }
    return res
}

const mapKeys = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        res[fn(k)] = v
    }
    return res
}


const reduceKeys = (obj, fn, initialVal) => {
    let acc = (initialVal === undefined) ? Object.keys(obj)[0] : initialVal
    if (acc === Object.keys(obj)[0]) {
        for (let i = 1; i < Object.keys(obj).length; i++) {
            acc = fn(acc, Object.keys(obj)[i], i, Object.keys(obj))
        }
    } else {
        for (let i = 0; i < Object.keys(obj).length; i++) {
            acc = fn(acc, Object.keys(obj)[i], i, Object.keys(obj))
        }
    }
    return acc
}



