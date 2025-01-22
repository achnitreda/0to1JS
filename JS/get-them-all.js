export function getArchitects() {
    const aTagArchitect = document.querySelectorAll("a")

    const allNonArchitect = document.querySelectorAll("span")

    return [Array.from(aTagArchitect), Array.from(allNonArchitect)]
}

export function getClassical() {
    const classicalArchitect = document.querySelectorAll(".classical")

    const nonClassicalArchitect = document.querySelectorAll(".modern, .baroque")

    return [Array.from(classicalArchitect), Array.from(nonClassicalArchitect)]
}

export function getActive() {
    const activeClassicalArchitect = document.querySelectorAll(".classical.active")
    const nActiveClassicalArchitect = document.querySelectorAll(".classical:not(.active)")

    return [Array.from(activeClassicalArchitect), Array.from(nActiveClassicalArchitect)]
}

export function getBonannoPisano() {
    const BonannoPisanoElement = document.getElementById("BonannoPisano")

    const rest = getActive()

    return [BonannoPisanoElement, rest[0]]
}