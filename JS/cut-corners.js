const trunc = (x) => {
    if (x !== x) return NaN;
    if (!isFinite(x) || x === 0) return x;
    if (x > 0 && x < 1) return 0;
    if (x < 0 && x > -1) return -0;

    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x);

    let result = 0;
    let multiplier = 1;

    while (multiplier * 10 <= x) {
        multiplier *= 10;
    }

    while (multiplier >= 1) {
        while (x >= multiplier) {
            x -= multiplier;
            result += multiplier;
        }
        multiplier /= 10;
    }

    return result * sign;
};

const floor = (x) => {
    const truncated = trunc(x);
    return x < 0 && x !== truncated ? truncated - 1 : truncated;
};

const ceil = (x) => {
    const truncated = trunc(x);
    return x > 0 && x !== truncated ? truncated + 1 : truncated;
};

const round = (x) => {
    const truncated = trunc(x);
    const fraction = x - truncated;
    if (x >= 0) {
        return fraction >= 0.5 ? truncated + 1 : truncated;
    } else {
        return fraction <= -0.5 ? truncated - 1 : truncated;
    }
};