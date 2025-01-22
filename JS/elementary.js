const multiply = (a, b) => {
    let x = a
    let y = b

    let res = 0
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
    } else if (b < 0) {
        b = -b
    }

    if (a > b) {
        while (b > 0) {
            res += a
            b--
        }
    } else {
        while (a > 0) {
            res += b
            a--
        }
    }

    if (x < 0 && y > 0) {
        return -res
    } else if (y < 0 && x > 0) {
        return -res
    }

    return res
}

const divide = (a, b) => {
    let x = a
    let y = b

    let res = 0
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
    } else if (b < 0) {
        b = -b
    }

    if (a < b) {
        return 0
    }
    while (a > multiply(b, res)) {
        res++
    }


    if (x < 0 && y > 0) {
        return -res + 1
    } else if (y < 0 && x > 0) {
        return -res + 1
    }

    return res - 1
}

const modulo = (a, b) => {
    let x = a
    let y = b

    let res = 0
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
    } else if (b < 0) {
        b = -b
    }

    if (a < b) {
        return a
    }

    let c = divide(a, b)
    let z = multiply(c, b)
    res = a - z


    if (x < 0 && y < 0) {
        return -res
    } else if (x < 0) {
        return -res
    }

    return res
}


/**
 * 
 *  78 / 34 = 2 => a / b = c
 *  2 * 34 = 68 => c * b  = z
 *  78 - 68 = 13 => a - z = res
 * 
 */
