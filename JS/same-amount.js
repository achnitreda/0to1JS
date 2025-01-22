const sameAmount = (str, regxp1, regxp2) => {

    const r1 = new RegExp(regxp1, "g");
    const r2 = new RegExp(regxp2, "g");

    const matches1 = [...str.matchAll(r1)]
    const matches2 = [...str.matchAll(r2)]
    return matches1.length === matches2.length
}
