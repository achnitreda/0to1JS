const fusion = (...objs) => {
    let res = {}

    for (const obj of objs) {
        for (const [k, v] of Object.entries(obj)) {
            if (Array.isArray(v)) {
                if (!res[k]) {
                    res[k] = v
                } else {
                    if (!Array.isArray(res[k])) {
                        res[k] = v
                    } else {
                        res[k].push(...v)
                    }
                }

            } else if (typeof v === "string") {
                if (!res[k]) {
                    res[k] = v
                } else {
                    if (typeof res[k] !== "string") {
                        res[k] = v
                    } else {
                        res[k] += " " + v
                    }
                }
            } else if (typeof v === "number") {
                if (!res[k]) {
                    res[k] = v
                } else {
                    if (typeof res[k] !== "number") {
                        res[k] = v
                    } else {
                        res[k] += v
                    }
                }
            } else if (typeof v === "object") {
                if (!res[k]) {
                    res[k] = fusion(v)
                } else {
                    res[k] = fusion(res[k], v)
                }
            }
        }
    }
    return res
}
