export const build = (bricks) => {
    let id = 1
    const container = document.querySelector('body')
    while (id <= bricks) {
        const brickDiv = document.createElement('div')
        brickDiv.id = `brick-${id}`

        if (id % 3 === 2) {
            brickDiv.setAttribute("data-foundation", "true")
        }
        setTimeout(() => {
            container.append(brickDiv)
        }, id * 100);
        id++
    }
}

export const repair = (...ids) => {
    let i = 0
    while (i < ids.length) {
        const ele = document.getElementById(`${ids[i]}`)
        if (ele.getAttribute("data-foundation") === "true") {
            ele.setAttribute("data-repaired", "in progress")
        } else {
            ele.setAttribute("data-repaired", "true")
        }
        i++
    }
}

export const destroy = () => {
    const brick = document.querySelectorAll("[id^=brick-]")

    if (brick[brick.length - 1]) brick[brick.length - 1].remove()
}