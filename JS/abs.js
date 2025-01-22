const isPositive = (n) => n > 0 ? true : false

const abs = (n) => {
    if (n === 0) {
        return 0
    }
    if (n < 0) {
        return -n
    }
    return Number(n)
}
