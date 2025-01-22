const pyramid = (str, n) => {
    let len = 2 * n
    let x = (len / 2) - 1
    let space = " ".repeat(str.length)
    let res = ""
    for (let j = 0; j < n; j++) {
        if (j === n - 1) {
            res += space.repeat(x) + str.repeat(len - 1 - (2 * x))
        } else {
            res += space.repeat(x) + str.repeat(len - 1 - (2 * x)) + "\n"
        }
        x--
    }
    return res
}
