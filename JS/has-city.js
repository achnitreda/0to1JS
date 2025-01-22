const hasCity = (country, arr) => {
    return (city) => {
        if (arr.some((v) => v === city)) {
            return `${city} is a city from ${country}`
        } else {
            return `${city} is not a city from ${country}`
        }
    }
}
