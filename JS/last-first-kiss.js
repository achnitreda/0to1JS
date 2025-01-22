const first = (val) => val && val.length >= 1 ? val[0] : undefined

const last = (val) => val && val.length >= 1 ? val[val.length - 1] : undefined

const kiss = (val) => [last(val), first(val)]

console.log(last([]));
