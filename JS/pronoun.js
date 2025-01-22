const pronoun = (str) => {
    let res = {}

    const pronounSet = new Set(['i', 'you', 'he', 'she', 'it', 'they', 'we'])

    let matches = [...str.matchAll(/(?<=\s|^)(i|you|he|she|it|they|we)(?=\s|$)/ig)]

    matches = matches.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    // console.log(matches);

    let count = 0
    let words = []
    for (const match of matches) {
        let pronoun = match[0].toLowerCase()
        if (!res[pronoun]) {
            count = 0
            words = []
        }
        res[pronoun] = { 'count': count + 1 }
        let word = str.slice(match.index + pronoun.length).trim().split(" ")

        // console.log(word);

        let added = (word[0].includes(",") ? word[0].split(",")[0] : word[0])

        if (added != '' && !pronounSet.has(added)) {
            words.push(added)
            res[pronoun] = { ...res[pronoun], 'word': words }
        } else {
            res[pronoun] = { ...res[pronoun], 'word': [] }
        }
        count++
    }
    return res
}


console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'));
