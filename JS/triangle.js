const triangle = (str, n) => {
    let res = ""
    let i = 1
    for (let h = 0; h < n; h++) {
        if (h === n - 1) {
            res += str.repeat(i)
        } else {
            res += str.repeat(i) + "\n"
        }
        i++
    }
    return res
}
