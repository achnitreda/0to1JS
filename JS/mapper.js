const map = (arr, fn) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i, arr))
    }
    return res
}

const flatMap = (arr, fn) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i, arr))
    }
    return flat(res)
}

const flat = (arr) => {
    let res = []

    function flatIt(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                res.push(arr[i])
            } else {
                flatIt(arr[i])
            }
        }
    }

    flatIt(arr)

    return res
}
