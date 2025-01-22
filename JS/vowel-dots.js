const vowels = new RegExp(/[a,e,i,o,u]/ig)

const vowelDots = (str) => {
    const matches = [...str.matchAll(vowels)]

    for (let i = 0; i < matches.length; i++) {
        str = str.replace(matches[i][0], `${matches[i][0]}.`)
    }

    return str
}
