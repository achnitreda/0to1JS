const dayOfTheYear = (date) => {
    let paddedYear = String(date.getFullYear()).padStart(4, '0')
    let jan1st = new Date(`${paddedYear}-01-01`)
    if (date.getDate() === jan1st.getDate()) return 1
    return ((date - jan1st) / (1000 * 3600 * 24)) + 1
}
