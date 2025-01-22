const deepCopy = (obj) => {
    let arrObj = Array.isArray(obj) ? [] : {}

    const propNames = !Array.isArray(arrObj) ? Reflect.ownKeys(obj) : Reflect.ownKeys(obj).slice(0, Reflect.ownKeys(obj).length - 1)

    for (const name of propNames) {
        const value = obj[name]

        arrObj[name] = (typeof value === "object")
            ?
            (value.toString().startsWith('/') && value.toString().endsWith('/')) ? value : deepCopy(value)
            :
            value

    }

    return arrObj
}
