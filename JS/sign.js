const sign = (n) => {
    if (isNaN(n)) {
        return NaN
    } else if (Number(n) > 0) {
        return 1
    } else if (Number(n) < 0) {
        return -1
    } else {
        return n
    }
}


const sameSign = (a, b) => {
    if (sign(a) === sign(b)) {
        return true
    } else {
        return false
    }
}
