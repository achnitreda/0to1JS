import { colors } from "./fifty-shades-of-cold.data.js"

export const generateClasses = () => {
  const styleTag = document.createElement('style')
  const headEle = document.querySelector('head')

  for (const color of colors) {
    styleTag.textContent += `.${color} {background: ${color};}`
  }

  headEle.append(styleTag)
}

export const generateColdShades = () => {
  const container = document.querySelector('body')
  let coldTerms = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]

  const coldColors = colors.filter((color) => coldTerms.some((coldTerm) => color.includes(coldTerm)))

  for (const color of coldColors) {
    const divEle = document.createElement('div')
    divEle.className = color
    divEle.textContent = color

    container.append(divEle)
  }
}

export const choseShade = (shade) => {
  const divs = document.querySelectorAll('div')
  for (const div of divs) {
    if (!div.classList.contains(`${shade}`)) {
      div.classList.replace(div.className, `${shade}`)
    }
  }
}
