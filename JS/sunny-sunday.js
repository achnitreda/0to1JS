const sunnySunday = (date) => {
    const jan1st = new Date(`0001-01-01`)

    const mp = new Map()

    mp.set(0, "Monday")
    mp.set(1, "Tuesday")
    mp.set(2, "Wednesday")
    mp.set(3, "Thursday")
    mp.set(4, "Friday")
    mp.set(5, "Saturday")
    mp.set(6, "Sunday")

    const diff = (date - jan1st) / (1000 * 3600 * 24)

    const dayNumber = diff % 6

    return mp.get(dayNumber)
}
