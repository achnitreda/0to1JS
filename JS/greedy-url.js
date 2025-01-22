const getURL = (str) => {
    const regxp = new RegExp(/https?:\/\/[^\s]+/g)
    return str.match(regxp)
}


const greedyQuery = (str) => {
    const regxp = new RegExp(/https?:\/\/[^\s]+\?[^\s&]+(?:&[^\s&]+){2,}/g)

    return str.match(regxp)
}

const notSoGreedy = (str) => {
    const regxp = new RegExp(/https?:\/\/[^\s]+\?[^\s&]+(?:&[^\s&]+){1,2}(?=\s)/g)

    return str.match(regxp)
}
