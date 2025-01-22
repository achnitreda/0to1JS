const citiesOnly = (arrOfObjs) => {
    return arrOfObjs.map((obj) => obj.city)
}

const upperCasingStates = (arrofStrs) => {
    return arrofStrs.map((v) => v.split(" ").map((v) => v[0].toUpperCase() + v.slice(1)).join(" "))
}

// (32°F − 32) × 5/9 = 0°C
const fahrenheitToCelsius = (arr) => {
    return arr.map((v) => Math.floor((Number(v.split("°")[0]) - 32) * (5 / 9)) + "°C")
}

const trimTemp = (arr) => {
    return arr.map((v) => ({ ...v, temperature: v.temperature.trim().split(" ").join("") }))
}

const tempForecasts = (arr) => {

    return arr.map((v) => {
        const ftoC = Math.floor((Number(v.temperature.split("°")[0]) - 32) * (5 / 9)) + "°C"
        const city = v.city.split(" ").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ")
        const state = v.state.split(" ").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ")

        return `${ftoC}elsius in ${city}, ${state}`
    })
}



const states = [
    {
        city: 'Los Angeles',
        temperature: '101 °F',
        state: 'california',
        region: 'West',
    },
    {
        city: 'San Francisco',
        temperature: '84 °F',
        state: 'california',
        region: 'West',
    },
    {
        city: 'Miami',
        temperature: ' 112 °F',
        state: 'Florida',
        region: 'South',
    },
    {
        city: 'New York City',
        temperature: ' 0 °F',
        state: 'new york',
        region: 'North East',
    },
    { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
    {
        city: 'Boston',
        temperature: '45 °F',
        state: 'massachussetts',
        region: 'North East',
    },
    {
        city: 'Jackson',
        temperature: ' 70°F  ',
        state: 'mississippi',
        region: 'South',
    },
    {
        city: 'Utqiagvik',
        temperature: ' -1 °F',
        state: 'Alaska',
        region: 'West',
    },
    {
        city: 'Albuquerque',
        temperature: ' 95 °F',
        state: 'new mexico',
        region: 'West',
    },
]

console.log(trimTemp(states), [
    {
        city: 'Los Angeles',
        state: 'california',
        region: 'West',
        temperature: '101°F',
    },
    {
        city: 'San Francisco',
        state: 'california',
        region: 'West',
        temperature: '84°F',
    },
    { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
    {
        city: 'New York City',
        state: 'new york',
        region: 'North East',
        temperature: '0°F',
    },
    { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
    {
        city: 'Boston',
        state: 'massachussetts',
        region: 'North East',
        temperature: '45°F',
    },
    {
        city: 'Jackson',
        state: 'mississippi',
        region: 'South',
        temperature: '70°F',
    },
    { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
    {
        city: 'Albuquerque',
        state: 'new mexico',
        region: 'West',
        temperature: '95°F',
    },
])