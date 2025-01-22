const throttle = (func, wait = 0) => {
    let leading = true
    let trailing = true
    let lastCallTime = 0
    let timeoutId = null

    return (...args) => {
        let now = Date.now()

        if (!lastCallTime || now - lastCallTime >= wait) {
            if (leading) {
                func(...args)
                lastCallTime = now
            } else if (trailing && !timeoutId) {
                timeoutId = setTimeout(() => {
                    func(...args)
                }, wait)
            }
        }
    }
}


const opThrottle = (func, wait = 0, { leading = false, trailing = false } = {}) => {
    let lastCallTime = 0
    let timeoutId = null

    return (...args) => {
        let now = Date.now()

        if (!lastCallTime || now - lastCallTime >= wait) {
            if (leading) {
                func(...args)
                lastCallTime = now
            } else if (trailing && !timeoutId) {
                timeoutId = setTimeout(() => {
                    func(...args)
                }, wait)
            }
        }
    }
}

// const add = (arr, el) => arr?.push(el)
// const run = (callback, callLimit, nbr) =>
//     new Promise((r) => {
//         let arr = []
//         let inter = setInterval(() => callback(arr, 1), callLimit)
//         setTimeout(() => {
//             clearInterval(inter)
//             r(arr.length)
//         }, callLimit * nbr)
//     });


// (async () => {
//     const a = await Promise.all([
//         run(throttle(add, 16), 26, 6),
//         run(throttle(add, 16), 26, 6),
//     ])
//     // const a = await run(throttle(add, 20), 10, 2) // 1
//     // const a = await run(throttle(add, 16), 26, 5) // 4
//     // const a = await Promise.all([
//     //     run(throttle(add, 16), 26, 6),
//     //     run(throttle(add, 16), 26, 6),
//     // ]) // [5,5]

//     console.log(a);

// }
// )()