const longWords = (arr) => {
    return arr.every((v) => v.length >= 5)
}

const oneLongWord = (arr) => {
    return arr.some((v) => typeof v === "string" && v.length >= 10)
}

const noLongWords = (arr) => {
    return !arr.some((v) => typeof v === "string" && v.length >= 7)
}
