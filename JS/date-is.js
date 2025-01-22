const isValid = (date) => {
    if (typeof date !== "object") {
        if (typeof date === 'number') {
            return isNaN(date) ? false : true
        }
        return false
    } else {
        return (date.toString() === 'Invalid Date') ? false : true
    }
}

const isAfter = (date1, date2) => {
    return (date1 - date2 > 0) ? true : false
}

const isBefore = (date1, date2) => {
    return isAfter(date2, date1)
}


const isFuture = (date) => {
    const currentDate = Date.now()
    return isValid(date) && isAfter(date, currentDate)
}

const isPast = (date) => {
    const currentDate = Date.now()
    return isValid(date) && !isAfter(date, currentDate)
}
