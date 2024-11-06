
import { readFile, writeFile } from 'fs/promises';

const filepath = new URL('./indexWritingFile.html', import.meta.url, 'utf-8');

// const data = await readFile(filepath);
// console.log(data); // bufferdata

let data = await readFile(filepath, { encoding: 'utf8' });
console.log(data);//we read the whole html

// Writing file

const obj = {
    title: 'my custom title',
    body: 'custom body'
}

for (const [key, value] of Object.entries(obj)) {
    // data = data.replace(`{${key}}`, value) // replacing the data
    data = data.replace(`[${key}]`, value); //We can use square brackets also
}
await writeFile(new URL('./indexWritingFile.html', import.meta.url), data);

// function write() {
//     let x = await writeFile //error because we can use await only insisde async function and at the top level of modules that is
//     //in ES 6  modules only.Top level means not inside any fucniton or block or anything.
// }