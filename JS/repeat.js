const repeat = (str, num) => {
    if (num === Infinity) {
        return ""
    }
    let res = ""
    num = Math.floor(num)
    while (num > 0) {
        res += str
        num--
    }
    return res
}