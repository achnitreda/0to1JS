const addWeek = (date) => {
    const map1 = new Map();

    const diffTime = date - new Date('0001-01-01')
    const diffDays = diffTime / (1000 * 60 * 60 * 24) // millsec / (1000 sec * 60 min * 60 h * 24 d)

    map1.set(1, 'Monday'); map1.set(2, 'Tuesday'); map1.set(3, 'Wednesday'); map1.set(4, 'Thursday'); map1.set(5, 'Friday'); map1.set(6, 'Saturday');
    map1.set(7, 'Sunday'); map1.set(8, 'secondMonday'); map1.set(9, 'secondTuesday'); map1.set(10, 'secondWednesday');
    map1.set(11, 'secondThursday'); map1.set(12, 'secondFriday'); map1.set(13, 'secondSaturday'); map1.set(0, 'secondSunday');

    const weekDay = (diffDays + 1) % 14

    return map1.get(weekDay)
}

const timeTravel = (obj) => {
    let date = obj.date

    date.setHours(obj.hour, obj.minute, obj.second)

    return date
}
