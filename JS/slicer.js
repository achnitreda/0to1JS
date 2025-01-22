const slice = (arr, start, end) => {
    if (!end || end >= arr.length) {
        end = arr.length
    } else if (end < 0 && end >= -arr.length) {
        end = end + arr.length
    } else if (end < -arr.length) {
        end = 0
    } else if (end <= start) {
        if (typeof arr === "string") {
            return ""
        } else {
            return []
        }
    }

    if (start < 0 && start >= -arr.length) {
        start = start + arr.length
    } else if (!start || start < -arr.length) {
        start = 0
    } else if (start >= arr.length) {
        if (typeof arr === "string") {
            return ""
        } else {
            return []
        }
    }

    if (typeof arr === "string") {
        let res = "";
        while (start < end) {
            res += arr[start];
            start++
        }
        return res
    } else {
        let res = []
        while (start < end) {
            res.push(arr[start]);
            start++
        }
        return res
    }
}
