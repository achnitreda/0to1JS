const chunk = (arr, size) => {
    let res = []
    for (let i = 0; i < arr.length; i += size) {
        if (i === 0) {
            res.push(arr.slice(i, size))
        } else {
            res.push(arr.slice(i))
        }
    }
    return res
}
