const max = (a, b) => {
    if (a == undefined && b == undefined) {
        return -Infinity
    }
    if (isNaN(a) || isNaN(b)) {
        return NaN
    } else {
        return a > b ? a : b
    }
}

const min = (a, b) => {
    if (a == undefined && b == undefined) {
        return Infinity
    }
    if (isNaN(a) || isNaN(b)) {
        return NaN
    } else {
        return a > b ? b : a
    }
}
