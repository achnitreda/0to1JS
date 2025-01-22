export const generateLetters = () => {
    let i = 1
    let fs = 11
    const container = document.querySelector('body')
    while (i <= 120) {
        const divEle = document.createElement('div')
        divEle.textContent = randomAlphabet()
        divEle.style.fontSize = `${fs}px`
        fs++
        if (i <= 40) {
            divEle.style.fontWeight = `300`
        } else if (i <= 80) {
            divEle.style.fontWeight = `400`
        } else {
            divEle.style.fontWeight = `600`
        }
        container.append(divEle)
        i++
    }
}

const randomAlphabet = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alphabet[Math.floor(Math.random() * 26)]
}
