import { argv } from 'node:process';

let res = []
let args = argv[2]

let words = args.split(" ")
let j = 0
while (j < words.length) {
    let half = Math.ceil(words[j].length / 2)
    res.push(words[j].slice(half) + words[j].slice(0, half))
    j++
}

console.log(res.join(" "))
