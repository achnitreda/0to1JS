const pick = (obj, arr) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        if (!Array.isArray(arr)) {
            if (k === arr) {
                res[k] = v
            }
        } else {
            for (const s of arr) {
                if (s === k) {
                    res[k] = v
                }
            }
        }
    }
    return res
}


const omit = (obj, arr) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (!Array.isArray(arr)) {
            if (k !== arr) {
                res[k] = v
            }
        } else {
            let f = true
            for (const s of arr) {
                if (s === k) {
                    f = false
                    break
                }
            }
            if (f) {
                res[k] = v
            }
        }
    }
    return res
}
