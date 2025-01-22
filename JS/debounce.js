const debounce = (func, wait = 0) => {
    let timeoutID
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            func(...args)
        }, wait)
    }
}


const opDebounce = (func, wait = 0, { leading = false } = {}) => {
    let timeoutID
    return (...args) => {
        if (leading) {
            func(...args)
            leading = false
        }
        if (timeoutID) {
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => {
            func(...args)
        }, wait)
    }
}

// -------------------------------------------------------------------------

// const add = (arr, el) => arr.push(el)

// const setIntervalSync = (fn, delay, limit = 0) => new Promise(s => {
//     let run = true
//     let count = 1
//     const start = Date.now()
//     const loop = () => {
//         const tick = Date.now()
//         const elapsed = tick - start
//         if (elapsed > count * delay) {
//             fn()
//             count++
//         }
//         elapsed < limit
//             ? setTimeout(loop)
//             : s()
//     }
//     setTimeout(loop)
// })

// const run = async (callback, { delay, count }) => {
//     const arr = []
//     await setIntervalSync(() => callback(arr, 1), delay, count * delay + 5)
//     return arr.length
// }

// (async () => {
//     let res = await run(debounce(add, 100), { delay: 50, count: 5 })
//     console.log(res)
// })()

// (async () => {
//     let res = await Promise.all([
//         run(opDebounce(add, 200, { leading: true }), { delay: 70, count: 3 }),
//         run(opDebounce(add, 100, { leading: true }), { delay: 140, count: 3 }),
//     ])
//     console.log(res)
// })()

// const logWithTime = (msg) => {
//     console.log(`${Date.now()}: ${msg}`);
// };

// const debouncedLog = opDebounce(logWithTime, 1000,{leading : true});

// // These will get debounced to a single call
// debouncedLog("First");
// debouncedLog("Second");
// debouncedLog("Third");