const RNA = (str) => {
    let res = ''
    if (str === '') {
        return res
    }
    for (const v of str) {
        switch (v) {
            case "G":
                res += "C"
                break
            case "C":
                res += "G"
                break
            case "T":
                res += "A"
                break
            case "A":
                res += "U"
                break
        }
    }
    return res
}

const DNA = (str) => {
    let res = ''
    if (str === '') {
        return res
    }
    for (const v of str) {
        switch (v) {
            case "C":
                res += "G"
                break
            case "G":
                res += "C"
                break
            case "A":
                res += "T"
                break
            case "U":
                res += "A"
                break
        }
    }
    return res
}
