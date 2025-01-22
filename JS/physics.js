const getAcceleration = (obj) => {
    let a = (obj.f / obj.m);
    let b = (obj.Δv / obj.Δt);
    let c = (2 * obj.d / (obj.t * obj.t));
    if (a && b && c) {
        if (a === b && b === c) {
            return a
        } else {
            return "impossible"
        }
    } else if (a && b) {
        if (a === b) {
            return a
        } else {
            return "impossible"
        }
    } else if (a && c) {
        if (a === c) {
            return a
        } else {
            return "impossible"
        }
    } else if (b && c) {
        if (b === c) {
            return b
        } else {
            return "impossible"
        }
    } else if (a) {
        return a
    } else if (b) {
        return b
    } else if (c) {
        return c
    } else {
        return "impossible"
    }
}

