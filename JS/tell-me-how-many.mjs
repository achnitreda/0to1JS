import { argv } from 'node:process';
import { readdir } from 'node:fs/promises';

try {
    const files = await readdir(argv[2]);
   console.log(files.length);
} catch (err) {
    console.error(err);
} 