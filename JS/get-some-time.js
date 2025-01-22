const firstDayWeek = (weekNumber, year) => {

    const paddedYear = String(year).padStart(4, '0')
    let jan1st = new Date(`${paddedYear}-01-01`)

    let dayofWeek;
    if (year < 1000) {
        dayofWeek = jan1st.getDay() + 1
    } else {
        dayofWeek = jan1st.getDay()
    }

    if (dayofWeek === 0) dayofWeek = 7

    let daystoAdd = (1 - dayofWeek)
    daystoAdd += (weekNumber - 1) * 7

    if (daystoAdd < 0) {
        return `01-01-${year}`
    }

    if (year < 1000) {
        jan1st.setDate(jan1st.getDate() + daystoAdd + 1)
    } else {
        jan1st.setDate(jan1st.getDate() + daystoAdd)
    }

    let dd = String(jan1st.getDate()).padStart(2, '0')
    let mm = String(jan1st.getMonth() + 1).padStart(2, '0')
    let yyyy = String(jan1st.getFullYear()).padStart(4, '0')

    return `${dd}-${mm}-${yyyy}`
}
