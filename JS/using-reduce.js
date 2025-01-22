const adder = (arr, initialValue) => {
    if (!initialValue) {
        initialValue = 0
    }
    return arr.reduce((acc, currVal) => acc + currVal, initialValue)
}

const sumOrMul = (arr, initialValue) => {
    if (!initialValue) {
        initialValue = 0
    }
    return arr.reduce((acc, currVal) => {
        if (currVal % 2 === 0) {
            acc *= currVal
        } else {
            acc += currVal
        }
        return acc
    }, initialValue)
}

const funcExec = (arr, initialValue) => {
    if (!initialValue) {
        initialValue = 0
    }
    return arr.reduce((acc, fn) => fn(acc), initialValue)
}
