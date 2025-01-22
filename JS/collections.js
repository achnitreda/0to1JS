const arrToSet = (arr) => {
    const set = new Set(arr)
    return set
}


const arrToStr = (arr) => {
    return arr.join("")
}

const setToArr = (set) => {
    return [...set]
}

const setToStr = (set) => {
    let str = ""
    for (const item of set) {
        str += String(item)
    }
    return str
}

const strToArr = (str) => {
    return str.split("")
}

const strToSet = (str) => {
    return arrToSet(strToArr(str))
}

const mapToObj = (map) => {
    return Object.fromEntries(map)
}

const objToArr = (obj) => {
    let arr = []
    for (const item of Object.values(obj)) {
        arr.push(item)
    }
    return arr
}

const objToMap = (obj) => {
    const map = new Map(Object.entries(obj))
    return map
}

const arrToObj = (arr) => {
    return { ...arr }
}


const strToObj = (str) => {
    return { ...strToArr(str) }
}

const superTypeOf = (val) => {
    if (typeof val === "object") {
        if (val === null) {
            return 'null'
        } else if (String(val).includes("Map")) {
            return 'Map'
        } else if (String(val).includes("Set")) {
            return 'Set'
        } else if (Array.isArray(val)) {
            return 'Array'
        } else {
            return 'Object'
        }
    } else if (typeof val === "string") {
        return 'String'
    } else if (typeof val === "number") {
        return 'Number'
    } else if (typeof val === "function") {
        return 'Function'
    } else {
        return 'undefined'
    }
}
