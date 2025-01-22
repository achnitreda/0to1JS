// there's another method is if days in mm = 02 is 29 days
const countLeapYears = (date) => {
    let i = 1
    let count = 0
    while (i < date.getFullYear()) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
            count++;
        }
        i++
    }
    return count
}
