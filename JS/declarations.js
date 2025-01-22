const escapeStr = "`\\/\"'"
const arr = [4, "2"]
const obj = { str: "", num: 0, bool: false, undef: undefined }
const nested = {
    arr: [4, undefined, "2"],
    obj: { str: "", num: 0, bool: false }
}

function deepFreeze(obj) {
    const propsName = Reflect.ownKeys(obj)

    for (const name of propsName) {
        const value = obj[name]

        if ((value && typeof value === "object") || typeof value === "function") {
            deepFreeze(value)
        }
    }

    return Object.freeze(obj)
}

deepFreeze(arr)
deepFreeze(obj)
deepFreeze(nested)
