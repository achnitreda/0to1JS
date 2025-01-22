const letterSpaceNumber = (str) => {
    const regxp = new RegExp(/(\w \d)[^\w]|(\w \d)$/g)

    const matches = [...str.matchAll(regxp)]

    let res = [];    
    
    for (let i = 0; i < matches.length; i++) {
        if (!matches[i][1]){
            res.push(matches[i][0])
        }else{
            res.push(matches[i][1])
        }
    }
    return res
}
