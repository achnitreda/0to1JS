const filter = (arr, fn) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

const reject = (arr, fn) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

const partition = (arr, fn) => {
    return [filter(arr, fn), reject(arr, fn)]
}
