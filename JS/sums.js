const sums = (n) => {
    let res = new Set()

    function findCombination(target, maxNum, currSum, combination) {
        if (maxNum < 0 || currSum > target) return

        if (target === currSum) {
            res.add([...combination].sort((a, b) => a - b).join(","))
            return
        }

        for (let i = maxNum; i >= 1; i--) {
            combination.push(i)
            findCombination(n, i, currSum + i, combination)
            combination.pop(i)
        }
    }

    findCombination(n, n - 1, 0, [])

    return Array.from(res).map(v => v.split(",").map(v => Number(v))).reverse()
}
