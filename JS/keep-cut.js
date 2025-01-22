const cutFirst = (str) => {
    return str.slice(2)
}

const cutLast = (str) => {
    return str.slice(0, str.length - 2)
}

const cutFirstLast = (str) => {
    return str.slice(2, str.length - 2)
}

const keepFirst = (str) => {
    return str.slice(0, 2)
}

const keepLast = (str) => {
    return str.slice(str.length - 2)
}

const keepFirstLast = (str) => {
    if (str.length <= 4) {
        return str
    }
    return keepFirst(str) + keepLast(str)
}