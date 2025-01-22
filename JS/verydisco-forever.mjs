import { argv } from "node:process";
import { writeFile } from 'node:fs/promises';

const words = argv[2].split(" ")
let res = []

let i = 0
while (i < words.length) {
    let half = Math.ceil(words[i].length / 2)
    res.push(words[i].slice(half) + words[i].slice(0, half))
    i++
}

writeFile("verydisco-forever.txt", res.join(" "))