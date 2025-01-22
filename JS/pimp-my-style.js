import { styles } from "./pimp-my-style.data.js";

let count = 0
let toggle = false
export const pimp = () => {
    const buttonEle = document.querySelector('button')
    if (count < styles.length && !toggle) {
        buttonEle.classList.add(styles[count])
        if (count === styles.length - 1) {
            buttonEle.classList.toggle("unpimp", true)
            toggle = true
        }
        count++
    } else {
        if (toggle) {
            if (count === 1) {
                buttonEle.classList.toggle("unpimp", false)
                toggle = false
            }
            buttonEle.classList.remove(styles[count - 1])
            count--
        }
    }
}