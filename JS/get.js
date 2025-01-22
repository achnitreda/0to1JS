const get = (src, path) => {
    const parts = path.split(".")

    for (const part of parts) {
        if (!src) {
            return undefined
        }
        src = src[part]
    }
    return src
}
