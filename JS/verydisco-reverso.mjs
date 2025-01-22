import { argv } from "node:process";
import { readFile } from "node:fs/promises";

const filename = argv[2]

try {
    const contents = await readFile(filename, { encoding: 'utf8' });
    console.log(verydisco(contents.trim()))
} catch (err) {
    console.error(err);
}

function verydisco(args) {
    let res = []
    let words = args.split(" ")
    let j = 0
    while (j < words.length) {
        let half = Math.floor(words[j].length / 2)
        res.push(words[j].slice(half) + words[j].slice(0, half))
        j++
    }
    return res.join(" ")
}