import { readFile } from 'fs/promises';

const filepath = new URL('./index.html', import.meta.url, 'utf-8');

// const data = await readFile(filepath);
// console.log(data); // bufferdata

const data = await readFile(filepath, { encoding: 'utf8' });
console.log(data);//we read the whole html