const filterEntries = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        if (fn(([k, v]))) {
            res[k] = v
        }
    }
    return res
}

const mapEntries = (obj, fn) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        const [key, val] = fn([k, v])
        res[key] = val
    }
    return res
}

const reduceEntries = (obj, fn, initialVal) => {
    let acc = (initialVal === undefined) ? Object.entries(obj)[0] : initialVal
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


const totalCalories = (obj) => {
    let total = 0
    for (const [k, v] of Object.entries(obj)) {
        total += ((nutritionDB[k].calories * v) / 100)
    }
    return Number(total.toFixed(1))
}

const lowCarbs = (obj) => {
    return filterEntries(obj, (([k, v]) => (nutritionDB[k].carbs * v) / 100 < 50))
}

const cartTotal = (obj) => {
    let res = {}
    for (const [k, v] of Object.entries(obj)) {
        let x = {}
        x["calories"] = (nutritionDB[k].calories * v) / 100
        x["protein"] = Number(((nutritionDB[k].protein * v)).toFixed(1)) / 100
        x["carbs"] = (nutritionDB[k].carbs * v) / 100
        x["sugar"] = (nutritionDB[k].sugar * v) / 100
        x["fiber"] = (nutritionDB[k].fiber * v) / 100
        x["fat"] = Number(((nutritionDB[k].fat * v)).toFixed(1)) / 100
        res[k] = x
    }
    return res
}
