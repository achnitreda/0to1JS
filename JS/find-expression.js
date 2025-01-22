const findExpression = (n) => {
    if (n === 1) return "1"
    if (n < 1) return undefined

    if (n % 2 === 0) {
        const mulPath = findExpression(n / 2)
        if (mulPath) return `${mulPath} ${mul2}`
    }

    const addPath = findExpression(n - 4)
    if (addPath) return `${addPath} ${add4}`

    return undefined
}
