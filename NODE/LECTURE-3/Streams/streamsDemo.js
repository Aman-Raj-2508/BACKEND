//reading the file
const fs = require('fs');

//For chunk by chunk
const transformStream = require('stream');

//reading the data
let fileStream = fs.createReadStream(__dirname + "/input.txt"); //syntax


//writing the data
let outputStream = process.stdout;


let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB) {
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB, 1000);
    }
});

//How to connect the readable stream to writable?? Use pipe function

// fileStream.pipe(outputStream);

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);