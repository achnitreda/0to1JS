export const compose = () => {
    const container = document.querySelector("body")
    document.addEventListener("keydown", (event) => {
        const divEle = document.createElement("div")
        if (event.key === "Backspace") {
            if (container.lastElementChild) container.lastElementChild.remove()
        }
        if (event.key === "Escape") {
            container.textContent = ""
        }
        if (event.key >= 'a' && event.key <= 'z') {
            divEle.className = "note"
            divEle.style.backgroundColor = ` rgb(${event.key.charCodeAt(0)}, 0, 0)`
            divEle.textContent = event.key
            container.append(divEle)
        }
    })
}
