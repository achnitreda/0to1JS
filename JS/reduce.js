const fold = (arr, fn, acc) => {
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}


const foldRight = (arr, fn, acc) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}


const reduce = (arr, fn, acc) => {
    if (!acc) {
        acc = arr[0]
    }
    return fold(arr.slice(1), fn, acc)
}

const reduceRight = (arr, fn, acc) => {
    if (!acc) {
        acc = arr[arr.length - 1]
    }
    return foldRight(arr.slice(0, arr.length - 1), fn, acc)
}
