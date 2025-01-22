const split = (str, sep) => {
    let res = []
    let pos = 0

    if (str === '') {
        return ['']
    }

    if (sep === '') {
        for (let i = 0; i < str.length; i++) {
            res.push(str[i])
        }
        return res
    }

    while (pos < str.length) {
        const matchPos = str.indexOf(sep, pos)
        if (matchPos === -1) {
            res.push(str.substring(pos));
            break
        }
        res.push(str.substring(pos, matchPos))
        pos = matchPos + sep.length
    }

    if (str.endsWith(sep)) {
        res.push('')
    }

    return res
}

const join = (arr, sep) => {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            res += arr[i]
        } else {
            res += arr[i] + sep
        }
    }
    return res
}
