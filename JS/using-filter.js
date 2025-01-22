const filterShortStateName = (arr) => {
    return arr.filter((v) => v.length < 7)
}

const filterStartVowel = (arr) => {
    const regxp = new RegExp(/^[a,e,i,o,u]/i)
    return arr.filter((v) => regxp.test(v))
}

const filter5Vowels = (arr) => {
    const regxp = new RegExp(/[a,e,i,o,u]/ig)
    return arr.filter((v) => [...v.matchAll(regxp)].length >= 5)
}

const filter1DistinctVowel = (arr) => {
    const regxp = new RegExp(/[a,e,i,o,u]/ig)

    return arr.filter((v) => {
        const vowels = v.match(regxp)
        const seen = new Set()
        vowels.map((v) => seen.add(v.toLowerCase()))
        return seen.size === 1
    })
}

const multiFilter = (arr) => {
    return arr.filter((v) => {
        const sVowels = /^[aieuo]/i
        const vowels = /[aieuo]/i
        return v.capital.length >= 8 && !sVowels.test(v.name) && vowels.test(v.tag) && v.region !== "South"
    })
}
