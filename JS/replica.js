const replica = (target, ...sources) => {
    sources.forEach(source => {
        for (const [k, v] of Object.entries(source)) {
            if (typeof target[k] === "object" && !Array.isArray(target[k]) && typeof v === "object" && !Array.isArray(v)) {
                replica(target[k], v)
            } else {
                target[k] = v
            }
        }
    })
    return target
}
