const defaultCurry = (obj1) => {
    let res = { ...obj1 }
    return (obj2) => {
        for (const [k, v] of Object.entries(obj2)) {
            res[k] = v
        }
        return res
    }
}

const mapCurry = (fn) => {
    let res = {}
    return (obj) => {
        for (let [k, v] of Object.entries(obj)) {
            const [key, val] = fn([k, v])
            res[key] = val
        }
        return res
    }
}

const reduceCurry = (fn) => {
    return (obj, intialVal) => {
        let acc = (intialVal === undefined) ? Object.entries(obj)[0] : intialVal
        if (acc === Object.entries(obj)[0]) {
            for (let i = 1; i < Object.entries(obj).length; i++) {
                acc = fn(acc, Object.entries(obj)[i])
            }
        } else {
            for (let i = 0; i < Object.entries(obj).length; i++) {
                acc = fn(acc, Object.entries(obj)[i])
            }
        }
        return acc
    }
}

const filterCurry = (fn) => {
    return (obj) => {
        let res = Object.entries(obj).filter(([k, v]) => fn([k, v]))
        return Object.fromEntries(res)
    }
}

const reduceScore = (obj, initialVal) => {
    let filtered = filterCurry(([k, v]) => v.isForceUser === true)(obj)
    return reduceCurry((acc, currVal) => acc += currVal[1].shootingScore + currVal[1].pilotingScore)(filtered, initialVal)
}

const filterForce = (obj) => {
    return filterCurry(([k, v]) => v.shootingScore >= 80 && v.isForceUser === true)(obj)
}


const mapAverage = (obj) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        res[k] = { ...v, "averageScore": (v.pilotingScore + v.shootingScore) / 2 }
    }
    return res
}
