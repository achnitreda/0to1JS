const flat = (arr, depth) => {
    if (!depth) {
        depth = 1
    }
    let res = []

    function depthFlat(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                depthFlat(arr[i], depth - 1)
            } else {
                res.push(arr[i])
            }
        }
    }

    depthFlat(arr, depth)
    return res
}