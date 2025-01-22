const words = (str) => str.split(" ")

const sentence = (arrStr) => arrStr.join(" ")

const yell = (str) => str.toUpperCase()

const whisper = (str) => "*" + str.toLowerCase() + "*"

const capitalize = (str) => str && str.length >= 1 && str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()

