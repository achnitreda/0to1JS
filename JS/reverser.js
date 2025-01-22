const reverse = (arr) => {
    let i = 0
    let j = arr.length - 1

    let x = arr

    if (typeof arr === "string") {
        arr = arr.split("")
    }

    while (j > i) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i++
        j--
    }

    if (typeof x === "string") {
        return arr.join("")
    }

    return arr
}
